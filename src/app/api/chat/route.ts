import { NextRequest, NextResponse } from "next/server";
import {
  extractLeadDataFromMessages,
  getNextMissingField,
  buildLeadMessage,
  type ChatMessage,
} from "@/lib/lead-parser";
import { CHAT_KNOWLEDGE } from "@/data/chat-knowledge";

type LeadData = ReturnType<typeof extractLeadDataFromMessages>;
type ServiceName = keyof typeof CHAT_KNOWLEDGE.services;

const LOW_SIGNAL_WORDS = new Set([
  "automation",
  "platform",
  "dashboard",
  "design",
  "growth",
  "system",
  "service",
  "services",
  "app",
  "web",
  "software",
  "cloud",
  "ai",
]);

const NEUTRAL_WORDS = new Set([
  "awesome",
  "nice",
  "great",
  "good",
  "okay",
  "ok",
  "cool",
  "fine",
  "yes",
  "no",
  "sure",
  "alright",
  "perfect",
  "done",
  "thanks",
  "thank you",
  "got it",
  "understood",
]);

const GLOBAL_BUDGET_OPTIONS = [
  "Under 25k",
  "25k–50k",
  "50k–1L",
  "Above 1L",
  "Under 50k",
  "50k–1L",
  "1L–2L",
  "Above 2L",
  "1L–3L",
  "3L+",
  "Need expert help",
];

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s&/+.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string) {
  return normalizeText(text).split(" ").filter(Boolean);
}

function getLastAssistantMessage(messages: ChatMessage[]) {
  return (
    [...messages].reverse().find((m) => m.role === "assistant")?.content || ""
  );
}

function getLastUserMessage(messages: ChatMessage[]) {
  return [...messages].reverse().find((m) => m.role === "user")?.content || "";
}

function getPrefix(word: string, length: number) {
  return word.slice(0, length);
}

function getBigrams(word: string) {
  const clean = word.trim();
  const grams: string[] = [];
  for (let i = 0; i < clean.length - 1; i++) {
    grams.push(clean.slice(i, i + 2));
  }
  return grams;
}

function getTrigrams(word: string) {
  const clean = word.trim();
  const grams: string[] = [];
  for (let i = 0; i < clean.length - 2; i++) {
    grams.push(clean.slice(i, i + 3));
  }
  return grams;
}

function overlapScore(a: string[], b: string[]) {
  if (!a.length || !b.length) return 0;
  const bSet = new Set(b);
  let hits = 0;

  for (const item of a) {
    if (bSet.has(item)) hits++;
  }

  return hits;
}

function matchIntent(text: string, keywords: readonly string[]) {
  const input = normalizeText(text);
  return keywords.some((keyword) => input.includes(normalizeText(keyword)));
}

function scoreKeywordAgainstInput(
  input: string,
  inputTokens: string[],
  keyword: string
) {
  const normalizedKeyword = normalizeText(keyword);
  const keywordTokens = tokenize(normalizedKeyword);

  let score = 0;

  if (!normalizedKeyword) return 0;

  if (input === normalizedKeyword) {
    score += 100;
  }

  if (input.includes(normalizedKeyword)) {
    score += normalizedKeyword.length > 8 ? 35 : 25;
  }

  if (
    keywordTokens.length > 1 &&
    keywordTokens.every((token) => inputTokens.includes(token))
  ) {
    score += 28;
  }

  for (const kToken of keywordTokens) {
    if (inputTokens.includes(kToken)) {
      score += 12;
      continue;
    }

    for (const iToken of inputTokens) {
      if (iToken === kToken) {
        score += 12;
        continue;
      }

      if (
        kToken.length >= 5 &&
        iToken.length >= 5 &&
        getPrefix(kToken, 3) === getPrefix(iToken, 3)
      ) {
        score += 3;
      }

      if (
        kToken.length >= 6 &&
        iToken.length >= 6 &&
        kToken[0] === iToken[0] &&
        kToken.slice(1, 3) === iToken.slice(1, 3)
      ) {
        score += 1;
      }

      const bi = overlapScore(getBigrams(kToken), getBigrams(iToken));
      const tri = overlapScore(getTrigrams(kToken), getTrigrams(iToken));

      if (tri >= 2) score += 2;
      else if (bi >= 2) score += 1;
    }
  }

  return score;
}

function detectServiceFromKnowledge(inputText: string) {
  const input = normalizeText(inputText);
  const inputTokens = tokenize(input);

  const results = (
    Object.entries(CHAT_KNOWLEDGE.services) as [
      ServiceName,
      (typeof CHAT_KNOWLEDGE.services)[ServiceName]
    ][]
  ).map(([service, config]) => {
    let score = 0;
    const matchedKeywords: string[] = [];

    for (const keyword of config.keywords) {
      const keywordScore = scoreKeywordAgainstInput(input, inputTokens, keyword);

      if (keywordScore > 0) {
        score += keywordScore;
        matchedKeywords.push(keyword);
      }
    }

    score += scoreKeywordAgainstInput(input, inputTokens, service);

    return {
      service,
      score,
      matchedKeywords,
    };
  });

  results.sort((a, b) => b.score - a.score);

  const best = results[0];
  const second = results[1];

  if (!best || best.score < 12) {
    return {
      service: null as ServiceName | null,
      confidence: "low" as const,
      scores: results,
    };
  }

  if (second && best.score - second.score <= 6) {
    return {
      service: best.service,
      confidence: "medium" as const,
      scores: results,
    };
  }

  return {
    service: best.service,
    confidence: "high" as const,
    scores: results,
  };
}

function getServiceQuickReplies() {
  return [
    "Web Development",
    "SaaS Development",
    "Mobile App Development",
    "Custom CRM Systems",
    "DevOps",
    "AI & Automation",
    "Cloud Solutions",
    "UI/UX Design",
    "Digital Growth",
    "Need suggestion",
  ];
}

function getServiceConfig(service?: string | null) {
  if (!service) return null;
  return CHAT_KNOWLEDGE.services[service as ServiceName] || null;
}

function isSuggestionIntent(text: string) {
  const input = normalizeText(text);

  return (
    input === "need" ||
    input === "need suggestion" ||
    input.includes("need suggestion") ||
    input.includes("suggestion") ||
    input.includes("suggest") ||
    input.includes("recommend") ||
    input.includes("recommendation") ||
    input.includes("help me decide") ||
    input.includes("guide me")
  );
}

function isPricingIntent(text: string) {
  const input = normalizeText(text);

  return (
    input.includes("price") ||
    input.includes("pricing") ||
    input.includes("cost") ||
    input.includes("budget") ||
    input.includes("how much") ||
    input.includes("quotation") ||
    input.includes("quote")
  );
}

function isTimelineIntent(text: string) {
  const input = normalizeText(text);

  return (
    input.includes("timeline") ||
    input.includes("time") ||
    input.includes("how long") ||
    input.includes("delivery") ||
    input.includes("duration") ||
    input.includes("deadline")
  );
}

function isEmail(text: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim());
}

function looksLikeName(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return false;
  if (trimmed.length < 2 || trimmed.length > 60) return false;
  if (trimmed.includes("@")) return false;
  return /^[a-zA-Z][a-zA-Z\s.'-]+$/.test(trimmed);
}

function detectUseCaseFromCurrentService(
  lastUserMessage: string,
  currentService?: string | null
) {
  const serviceConfig = getServiceConfig(currentService);
  if (!serviceConfig) return null;

  const input = normalizeText(lastUserMessage);

  for (const option of serviceConfig.useCaseOptions) {
    if (normalizeText(option) === input) {
      return option;
    }
  }

  return null;
}

function detectBudgetOption(lastUserMessage: string) {
  const input = normalizeText(lastUserMessage);

  for (const option of GLOBAL_BUDGET_OPTIONS) {
    if (normalizeText(option) === input) {
      return option;
    }
  }

  return null;
}

function enrichLeadFromMessages(lead: LeadData, messages: ChatMessage[]) {
  const enriched: LeadData = { ...lead };
  const userMessages = messages.filter((m) => m.role === "user").map((m) => m.content);

  if (!enriched.projectType) {
    for (let i = userMessages.length - 1; i >= 0; i--) {
      const detection = detectServiceFromKnowledge(userMessages[i]);
      if (detection.service) {
        enriched.projectType = detection.service;
        break;
      }
    }
  }

  if (enriched.projectType && !enriched.useCase) {
    const serviceConfig = getServiceConfig(enriched.projectType);
    if (serviceConfig) {
      for (let i = userMessages.length - 1; i >= 0; i--) {
        const input = normalizeText(userMessages[i]);
        const matched = serviceConfig.useCaseOptions.find(
          (option) => normalizeText(option) === input
        );
        if (matched && matched !== "Need suggestion") {
          enriched.useCase = matched;
          break;
        }
      }
    }
  }

  if (!enriched.budget) {
    for (let i = userMessages.length - 1; i >= 0; i--) {
      const matchedBudget = detectBudgetOption(userMessages[i]);
      if (matchedBudget) {
        enriched.budget = matchedBudget;
        break;
      }
    }
  }

  if (!enriched.email) {
    for (let i = userMessages.length - 1; i >= 0; i--) {
      if (isEmail(userMessages[i])) {
        enriched.email = userMessages[i].trim();
        break;
      }
    }
  }

  if (!enriched.name) {
    for (let i = userMessages.length - 1; i >= 0; i--) {
      if (looksLikeName(userMessages[i])) {
        enriched.name = userMessages[i].trim();
        break;
      }
    }
  }

  return enriched;
}

function getQuestionForField(field: string, lead: LeadData) {
  switch (field) {
    case "projectType":
      return {
        message: "Sure — which service do you need help with?",
        quickReplies: getServiceQuickReplies(),
      };

    case "useCase": {
      const serviceConfig = getServiceConfig(lead.projectType);
      if (serviceConfig) {
        return {
          message: serviceConfig.useCaseQuestion,
          quickReplies: [...serviceConfig.useCaseOptions],
        };
      }

      return {
        message:
          "Tell me what you want to build or improve, and I’ll guide you to the right service.",
        quickReplies: getServiceQuickReplies(),
      };
    }

    case "budget": {
      const serviceConfig = getServiceConfig(lead.projectType);
      if (serviceConfig) {
        return {
          message: `Understood. What’s your approximate budget for this ${lead.projectType?.toLowerCase() || "project"}?`,
          quickReplies: [...serviceConfig.pricingQuickReplies, "Need suggestion"].filter(
            (v, i, arr) => arr.indexOf(v) === i
          ),
        };
      }

      return {
        message: `Understood. What’s your approximate budget for this ${lead.projectType?.toLowerCase() || "project"}?`,
        quickReplies: [
          "Under 25k",
          "25k–50k",
          "50k–1L",
          "Above 1L",
          "Need suggestion",
        ],
      };
    }

    case "name":
      return {
        message: "Great. Please share your name so our team can contact you.",
        quickReplies: [],
      };

    case "email":
      return {
        message: "Please share your email address.",
        quickReplies: [],
      };

    default:
      return {
        message: "Please share a few details about your requirement.",
        quickReplies: [],
      };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body.messages)
      ? body.messages
      : [];

    const lastUserMessage = getLastUserMessage(messages);
    const lastAssistantMessage = getLastAssistantMessage(messages);
    const lowerAssistantMessage = normalizeText(lastAssistantMessage);

    let lead = extractLeadDataFromMessages(messages);
    lead = enrichLeadFromMessages(lead, messages);

    const currentService = lead.projectType || null;
    const currentConfig = getServiceConfig(currentService);

    const detectedUseCase = detectUseCaseFromCurrentService(
      lastUserMessage,
      currentService
    );
    const detectedBudget = detectBudgetOption(lastUserMessage);

    const nextField = getNextMissingField(lead);

    const isProjectTypeStage =
      nextField === "projectType" ||
      lowerAssistantMessage.includes("which service do you need help with") ||
      lowerAssistantMessage.includes("what would you like help with");

    const isUseCaseStage =
      nextField === "useCase" ||
      lowerAssistantMessage.includes(normalizeText(currentConfig?.useCaseQuestion || ""));

    const isBudgetStage =
      nextField === "budget" ||
      lowerAssistantMessage.includes("approximate budget") ||
      lowerAssistantMessage.includes("budget for this");

    // 1. Abuse
    if (matchIntent(lastUserMessage, CHAT_KNOWLEDGE.abuse.keywords)) {
      return NextResponse.json({
        mode: "text",
        message: CHAT_KNOWLEDGE.abuse.response,
        quickReplies: CHAT_KNOWLEDGE.abuse.quickReplies,
      });
    }

    // 2. Start again
    if (normalizeText(lastUserMessage) === "start again") {
      return NextResponse.json({
        mode: "text",
        message: CHAT_KNOWLEDGE.greetings.response,
        quickReplies: CHAT_KNOWLEDGE.greetings.quickReplies,
        collected: {},
        nextField: "projectType",
      });
    }

    // 3. Greetings
    if (
      matchIntent(lastUserMessage, CHAT_KNOWLEDGE.greetings.keywords) &&
      !currentService
    ) {
      return NextResponse.json({
        mode: "text",
        message: CHAT_KNOWLEDGE.greetings.response,
        quickReplies: CHAT_KNOWLEDGE.greetings.quickReplies,
        collected: lead,
      });
    }

    // 4. Closing
    if (matchIntent(lastUserMessage, CHAT_KNOWLEDGE.closing.keywords)) {
      return NextResponse.json({
        mode: "text",
        message: CHAT_KNOWLEDGE.closing.response,
        quickReplies: CHAT_KNOWLEDGE.closing.quickReplies,
      });
    }

    // 5. Neutral acknowledgements
    if (NEUTRAL_WORDS.has(normalizeText(lastUserMessage))) {
      return NextResponse.json({
        mode: "text",
        message:
          currentConfig
            ? "Got it. Please choose one of the options below or tell me a bit more about your requirement."
            : "Got it. Tell me what you want to build or choose one of the services below.",
        quickReplies:
          currentConfig && isUseCaseStage
            ? [...currentConfig.useCaseOptions]
            : currentConfig && isBudgetStage
            ? [...currentConfig.pricingQuickReplies]
            : getServiceQuickReplies(),
        collected: lead,
        nextField: nextField || "projectType",
      });
    }

    // 6. Suggestion intent must be handled BEFORE service detection
    if (isSuggestionIntent(lastUserMessage)) {
      if (isProjectTypeStage || !currentService) {
        return NextResponse.json({
          mode: "text",
          message:
            "Sure — here’s a simple guide:\n\n• Web Development → best for websites, ecommerce, portals, and custom web platforms.\n• SaaS Development → best for subscription-based software products.\n• Mobile App Development → best when users need a phone app or notifications.\n• Custom CRM Systems → best for lead management, pipelines, customer workflows, owned dashboards, and automation.\n• DevOps → best for CI/CD, deployment, infrastructure automation, and reliability.\n• AI & Automation → best for chatbots, intelligent agents, workflow automation, and document processing.\n• Cloud Solutions → best for architecture, migration, scaling, and hosting.\n• UI/UX Design → best for research, interface design, wireframes, prototypes, and design systems.\n• Digital Growth → best for SEO, analytics, performance, and conversion improvement.\n\nWhat sounds closest to your requirement?",
          quickReplies: [
            "Web Development",
            "SaaS Development",
            "Mobile App Development",
            "Custom CRM Systems",
            "DevOps",
            "AI & Automation",
            "Cloud Solutions",
            "UI/UX Design",
            "Digital Growth",
          ],
          collected: lead,
          nextField: "projectType",
        });
      }

      if (isUseCaseStage && currentConfig) {
        return NextResponse.json({
          mode: "text",
          message: currentConfig.suggestionMessage,
          quickReplies: [...currentConfig.useCaseOptions].filter(
            (reply) => reply !== "Need suggestion"
          ),
          collected: lead,
          nextField: "useCase",
        });
      }

      if (isBudgetStage && currentConfig) {
        return NextResponse.json({
          mode: "text",
          message: currentConfig.pricingMessage,
          quickReplies: [...currentConfig.pricingQuickReplies],
          collected: lead,
          nextField: "budget",
        });
      }
    }

    // 7. If current service exists and user picked a valid use-case option, move forward
    if (currentService && detectedUseCase && detectedUseCase !== "Need suggestion") {
      const updatedLead = {
        ...lead,
        useCase: detectedUseCase,
      };

      return NextResponse.json({
        mode: "text",
        message: `Understood. What’s your approximate budget for this ${currentService.toLowerCase()}?`,
        quickReplies: [...(currentConfig?.pricingQuickReplies || GLOBAL_BUDGET_OPTIONS)],
        collected: updatedLead,
        nextField: "budget",
      });
    }

    // 8. Budget option selected
    if (detectedBudget) {
      const updatedLead = {
        ...lead,
        budget: detectedBudget,
      };

      if (!updatedLead.name) {
        return NextResponse.json({
          mode: "text",
          message: "Great. Please share your name so our team can contact you.",
          quickReplies: [],
          collected: updatedLead,
          nextField: "name",
        });
      }

      if (!updatedLead.email) {
        return NextResponse.json({
          mode: "text",
          message: "Please share your email address.",
          quickReplies: [],
          collected: updatedLead,
          nextField: "email",
        });
      }

      return NextResponse.json({
        mode: "action",
        action: "save_lead",
        message:
          "Thanks — I have the details needed. Please confirm and our team will contact you shortly.",
        data: {
          name: updatedLead.name || "",
          email: updatedLead.email || "",
          phone: updatedLead.phone || "",
          projectType: updatedLead.projectType || "General Inquiry",
          budget: updatedLead.budget || "",
          message: buildLeadMessage(updatedLead),
          chatTranscript: messages,
        },
      });
    }

    // 9. Pricing intent
    if (isPricingIntent(lastUserMessage) && currentConfig) {
      return NextResponse.json({
        mode: "text",
        message: currentConfig.pricingMessage,
        quickReplies: [...currentConfig.pricingQuickReplies],
        collected: lead,
        nextField: "budget",
      });
    }

    if (isPricingIntent(lastUserMessage) && !currentService) {
      return NextResponse.json({
        mode: "text",
        message:
          "Pricing depends on the service, features, complexity, and timeline. Tell me what you want to build or improve, and I’ll guide you with the most relevant estimate.",
        quickReplies: getServiceQuickReplies(),
        collected: lead,
      });
    }

    // 10. Timeline
    if (isTimelineIntent(lastUserMessage)) {
      return NextResponse.json({
        mode: "text",
        message:
          "Timeline depends on the service and complexity. A simple website or design package can take days, while SaaS, mobile apps, CRM systems, AI automation, or cloud work can take weeks. Tell me your requirement and I’ll guide you better.",
        quickReplies: currentConfig
          ? [...currentConfig.useCaseOptions]
          : getServiceQuickReplies(),
        collected: lead,
      });
    }

    // 11. Service detection / switching only after suggestion/use-case handling
    const serviceDetection = detectServiceFromKnowledge(lastUserMessage);
    const detectedService = serviceDetection.service;

    const isExplicitSwitchPhrase =
      CHAT_KNOWLEDGE.serviceSwitchPhrases.some((phrase) =>
        normalizeText(lastUserMessage).includes(normalizeText(phrase))
      );

    const normalizedUser = normalizeText(lastUserMessage);
    const isLowSignalSingleWord =
      currentService &&
      !isExplicitSwitchPhrase &&
      LOW_SIGNAL_WORDS.has(normalizedUser);

    const canSwitchService =
      !currentService ||
      isExplicitSwitchPhrase ||
      serviceDetection.confidence === "high";

    if (
      detectedService &&
      detectedService !== currentService &&
      canSwitchService &&
      !isLowSignalSingleWord
    ) {
      const serviceConfig = getServiceConfig(detectedService);

      if (serviceConfig) {
        return NextResponse.json({
          mode: "text",
          message: `Understood — you'd like help with ${detectedService}. ${serviceConfig.useCaseQuestion}`,
          quickReplies: [...serviceConfig.useCaseOptions],
          collected: {
            ...lead,
            projectType: detectedService,
            useCase: "",
          },
          nextField: "useCase",
          debug:
            process.env.NODE_ENV === "development"
              ? {
                  detectedService,
                  confidence: serviceDetection.confidence,
                  scores: serviceDetection.scores.slice(0, 3),
                }
              : undefined,
        });
      }
    }

    // 12. Fresh service start if no current service
    if (!currentService && detectedService) {
      const serviceConfig = getServiceConfig(detectedService);

      if (serviceConfig) {
        return NextResponse.json({
          mode: "text",
          message: `Understood — you'd like help with ${detectedService}. ${serviceConfig.useCaseQuestion}`,
          quickReplies: [...serviceConfig.useCaseOptions],
          collected: {
            ...lead,
            projectType: detectedService,
          },
          nextField: "useCase",
        });
      }
    }

    // 13. Completion
    const refreshedLead = enrichLeadFromMessages(lead, messages);
    const refreshedNextField = getNextMissingField(refreshedLead);

    if (
      !refreshedNextField &&
      refreshedLead.projectType &&
      refreshedLead.useCase &&
      refreshedLead.budget
    ) {
      if (!refreshedLead.name) {
        return NextResponse.json({
          mode: "text",
          message: "Great. Please share your name so our team can contact you.",
          quickReplies: [],
          collected: refreshedLead,
          nextField: "name",
        });
      }

      if (!refreshedLead.email) {
        return NextResponse.json({
          mode: "text",
          message: "Please share your email address.",
          quickReplies: [],
          collected: refreshedLead,
          nextField: "email",
        });
      }

      return NextResponse.json({
        mode: "action",
        action: "save_lead",
        message:
          "Thanks — I have the details needed. Please confirm and our team will contact you shortly.",
        data: {
          name: refreshedLead.name || "",
          email: refreshedLead.email || "",
          phone: refreshedLead.phone || "",
          projectType: refreshedLead.projectType || "General Inquiry",
          budget: refreshedLead.budget || "",
          message: buildLeadMessage(refreshedLead),
          chatTranscript: messages,
        },
      });
    }

    // 14. Default staged question
    const nextQuestion = getQuestionForField(
      refreshedNextField || "projectType",
      refreshedLead
    );

    return NextResponse.json({
      mode: "text",
      message: nextQuestion.message,
      quickReplies: nextQuestion.quickReplies,
      collected: refreshedLead,
      nextField: refreshedNextField || "projectType",
      debug:
        process.env.NODE_ENV === "development"
          ? {
              detectedService,
              confidence: serviceDetection.confidence,
              scores: serviceDetection.scores.slice(0, 3),
            }
          : undefined,
    });
  } catch (error) {
    console.error("Chat route error:", error);

    return NextResponse.json(
      {
        mode: "text",
        message: CHAT_KNOWLEDGE.fallback.response,
        quickReplies: CHAT_KNOWLEDGE.fallback.quickReplies,
      },
      { status: 500 }
    );
  }
}
