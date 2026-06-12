

// const { ActivityHandler } = require("botbuilder");

// class botActivityHandler extends ActivityHandler {
//   constructor() {
//     super();
//     this.onMembersAdded(async (context, next) => {
//       console.log("Added");
//       await context.sendActivity("Welcome to the bot!")
//       await next();
//     });

//     this.onMessage(async (context, next) => {
//       console.log("in on message");
//       await context.sendActivity(context.activity.text); //Echo Bot
//        //await context.sendActivity("Hello");
//     });
//   }
// }

// module.exports = botActivityHandler;
const { ActivityHandler } = require("botbuilder");
const {
  CHATBOT_QUESTION_BANK,
  CHATBOT_SERVICE_DECISION_TREE,
} = require("./chatbot-question-bank");

class botActivityHandler extends ActivityHandler {
  constructor() {
    super();

    this.intents = CHATBOT_QUESTION_BANK.flatMap(
      (category) => category.intents
    );

    /*
      In-memory sessions are fine for local testing.
      For production, save sessions and leads in MongoDB/PostgreSQL/CRM,
      because server restart will clear this memory.
    */
    this.sessions = new Map();

    console.log(
      "Loaded",
      CHATBOT_QUESTION_BANK.length,
      "categories and",
      this.intents.length,
      "intents"
    );

    this.onMembersAdded(async (context, next) => {
      await context.sendActivity(this.getWelcomeMessage());
      await next();
    });

    this.onMessage(async (context, next) => {
      try {
        const conversationId = context.activity.conversation.id;
        const userText = (context.activity.text || "").trim();
        const userMessage = userText.toLowerCase();

        if (!userText) {
          await context.sendActivity(
            "Please type your requirement or choose one of our services."
          );
          await next();
          return;
        }

        let session = this.sessions.get(conversationId);

        if (!session) {
          session = this.createNewSession();
        }

        console.log("User:", userMessage);
        console.log("Session:", session);

        if (this.isRestartMessage(userMessage)) {
          session = this.createNewSession();
          this.sessions.set(conversationId, session);

          await context.sendActivity(this.getWelcomeMessage());
          await next();
          return;
        }

        /*
          Stage flow:
          start -> useCase -> timeline -> budget -> name -> email -> phone -> complete
        */

        if (session.stage === "useCase") {
          session.selectedUseCase = userText;
          session.stage = "timeline";
          this.sessions.set(conversationId, session);

          await context.sendActivity(this.getUseCaseResponse(session));
          await next();
          return;
        }

        if (session.stage === "timeline") {
          session.timeline = userText;
          session.stage = "budget";
          this.sessions.set(conversationId, session);

          await context.sendActivity(this.getPricingResponse(session));
          await next();
          return;
        }

        if (session.stage === "budget") {
          session.budget = userText;
          session.stage = "name";
          this.sessions.set(conversationId, session);

          await context.sendActivity(
            "Great, I noted your budget.\n\nPlease share your name so our team can contact you."
          );
          await next();
          return;
        }

        if (session.stage === "name") {
          session.name = userText;
          session.stage = "email";
          this.sessions.set(conversationId, session);

          await context.sendActivity(
            `Thanks ${session.name}. Please share your email address.`
          );
          await next();
          return;
        }

        if (session.stage === "email") {
          if (!this.isValidEmail(userText)) {
            await context.sendActivity(
              "Please share a valid email address, for example: name@example.com"
            );
            await next();
            return;
          }

          session.email = userText;
          session.stage = "phone";
          this.sessions.set(conversationId, session);

          await context.sendActivity(
            "Got it. Please share your phone number or WhatsApp number. If you do not want to share it, type skip."
          );
          await next();
          return;
        }

        if (session.stage === "phone") {
          if (userMessage !== "skip") {
            session.phone = userText;
          }

          session.stage = "complete";
          this.sessions.set(conversationId, session);

          this.saveLead(session);

          await context.sendActivity(this.getFinalLeadMessage(session));
          await next();
          return;
        }

        /*
          If user asks pricing/timeline before selecting a service,
          guide them first instead of losing the conversation.
        */
        if (this.isPricingMessage(userMessage) && !session.selectedService) {
          await context.sendActivity(
            "Pricing depends on the service and scope.\n\nPlease choose the service first:\n\n" +
              "• Web Development\n" +
              "• Mobile App Development\n" +
              "• Custom CRM Systems\n" +
              "• SaaS Development\n" +
              "• AI & Automation\n" +
              "• UI/UX Design\n" +
              "• SEO & Digital Growth\n" +
              "• Cloud, DevOps & Maintenance"
          );
          await next();
          return;
        }

        const matchedIntent = this.findBestIntent(userMessage);

        if (matchedIntent) {
          session.selectedIntent = matchedIntent;
          session.selectedService = matchedIntent.category;
          session.stage = "useCase";

          this.sessions.set(conversationId, session);

          await context.sendActivity(this.getIntentResponse(matchedIntent));
        } else {
          await context.sendActivity(this.getFallbackMessage());
        }

        await next();
      } catch (error) {
        console.error("Bot Processing Error:", error);

        await context.sendActivity(
          "Something went wrong while processing your request. Please try again or type Start Again."
        );
      }
    });
  }

  createNewSession() {
    return {
      stage: "start",
      selectedIntent: null,
      selectedService: "",
      selectedUseCase: "",
      timeline: "",
      budget: "",
      name: "",
      email: "",
      phone: "",
      requirement: "",
    };
  }

  isRestartMessage(userMessage) {
    return (
      userMessage === "start again" ||
      userMessage === "restart" ||
      userMessage === "reset" ||
      userMessage === "new chat" ||
      userMessage === "start over"
    );
  }

  isPricingMessage(userMessage) {
    return (
      userMessage.includes("price") ||
      userMessage.includes("pricing") ||
      userMessage.includes("cost") ||
      userMessage.includes("budget") ||
      userMessage.includes("quote") ||
      userMessage.includes("quotation") ||
      userMessage.includes("how much")
    );
  }

  findBestIntent(userMessage) {
    let matchedIntent = null;
    let highestScore = 0;

    for (const intent of this.intents) {
      let score = 0;

      if (intent.keywords && Array.isArray(intent.keywords)) {
        for (const keyword of intent.keywords) {
          const normalizedKeyword = String(keyword).toLowerCase().trim();

          if (!normalizedKeyword) continue;

          if (userMessage === normalizedKeyword) {
            score += 10;
          } else if (userMessage.includes(normalizedKeyword)) {
            score += normalizedKeyword.length > 5 ? 5 : 2;
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        matchedIntent = intent;
      }
    }

    return highestScore > 0 ? matchedIntent : null;
  }

  getIntentResponse(intent) {
    let response =
      intent.responseGoal ||
      "Thanks for sharing. We can help you with this requirement.";

    if (intent.followUpQuestions && intent.followUpQuestions.length > 0) {
      response += "\n\nTo better understand your requirement:\n";
      response += intent.followUpQuestions.map((q) => "• " + q).join("\n");
    } else {
      response += "\n\nPlease choose the closest option below:";
    }

    if (intent.quickReplies && intent.quickReplies.length > 0) {
      response += "\n\nAvailable Options:\n";
      response += intent.quickReplies.map((q) => "• " + q).join("\n");
    }

    return response;
  }

  getUseCaseResponse(session) {
    const service = session.selectedService || "your selected service";
    const useCase = session.selectedUseCase || "your requirement";

    return (
      `Understood — you need help with ${useCase} under ${service}.\n\n` +
      `This is something HNX Solutions can handle. We’ll review your exact requirement, suggest the right technical approach, and prepare a practical scope.\n\n` +
      `What is your preferred timeline?\n\n` +
      `• Urgent\n` +
      `• 1-2 weeks\n` +
      `• 1 month\n` +
      `• Flexible\n` +
      `• Need roadmap`
    );
  }

  getPricingResponse(session) {
    const service = session.selectedService || "";
    const timeline = session.timeline || "Not specified";

    let pricing = "";

    if (service.includes("Web Development")) {
      pricing =
        "For web development, rough pricing usually starts from $10k–$25k for landing/basic websites, $25k–$50k for standard business websites, and $50k+ for advanced websites or portals.";
    } else if (service.includes("Mobile App")) {
      pricing =
        "For mobile apps, rough pricing usually starts from $50k–$1L for a basic MVP and can go $1L–$2L+ depending on screens, backend, payments, notifications, and admin panel.";
    } else if (service.includes("CRM")) {
      pricing =
        "For custom CRM systems, rough pricing usually starts from $50k–$1L and can go $1L–$2L+ depending on workflows, dashboards, automation, roles, and integrations.";
    } else if (service.includes("SaaS")) {
      pricing =
        "For SaaS development, rough pricing usually starts from $75k–$1.5L for MVP and can go $2L–$3L+ for advanced platforms with subscriptions, roles, dashboards, and integrations.";
    } else if (service.includes("AI")) {
      pricing =
        "For AI automation or chatbot systems, rough pricing usually starts from $30k–$75k and can go $1L+ depending on integrations, data sources, workflows, and AI complexity.";
    } else if (service.includes("UI/UX")) {
      pricing =
        "For UI/UX design, rough pricing usually starts from $10k–$25k for basic screens and can go $50k+ for full product design systems and prototypes.";
    } else if (service.includes("SEO")) {
      pricing =
        "For SEO and growth work, rough pricing usually starts from $10k–$25k for basic audits/setup and can go $25k–$50k+ for technical SEO, analytics, and ongoing optimization.";
    } else if (service.includes("Cloud") || service.includes("DevOps")) {
      pricing =
        "For cloud, DevOps, and deployment work, rough pricing usually starts from $20k–$50k for basic setup and can go $1L+ for advanced infrastructure, monitoring, scaling, or automation.";
    } else {
      pricing =
        "Pricing depends on the exact scope, features, integrations, and timeline.";
    }

    return (
      `${pricing}\n\n` +
      `Your selected timeline: ${timeline}\n\n` +
      `What is your approximate budget?\n\n` +
      `• Under 25k\n` +
      `• 25k–50k\n` +
      `• 50k–1L\n` +
      `• 1L–2L\n` +
      `• Above 2L\n` +
      `• Need expert help`
    );
  }

  getFinalLeadMessage(session) {
    return (
      `Thank you, ${session.name}. ✅\n\n` +
      `I have collected your requirement:\n\n` +
      `• Service: ${session.selectedService || "Not specified"}\n` +
      `• Requirement: ${session.selectedUseCase || "Not specified"}\n` +
      `• Timeline: ${session.timeline || "Not specified"}\n` +
      `• Budget: ${session.budget || "Not specified"}\n` +
      `• Email: ${session.email || "Not specified"}\n` +
      `• Phone: ${session.phone || "Not shared"}\n\n` +
      `Our team will review your requirement and contact you shortly.\n\n` +
      `You can type Start Again if you want to discuss another requirement.`
    );
  }

  getWelcomeMessage() {
    return (
      "👋 Welcome to HNX Solutions!\n\n" +
      "We can help with:\n\n" +
      "• Web Development\n" +
      "• Mobile App Development\n" +
      "• Custom CRM Systems\n" +
      "• SaaS Development\n" +
      "• AI & Automation\n" +
      "• UI/UX Design\n" +
      "• SEO & Digital Growth\n" +
      "• Cloud, DevOps & Maintenance\n\n" +
      "What would you like to build, improve, or automate?"
    );
  }

  getFallbackMessage() {
    let fallback =
      "I couldn't identify the exact service.\n\nPlease choose one of these popular services:\n";

    if (
      CHATBOT_SERVICE_DECISION_TREE &&
      Array.isArray(CHATBOT_SERVICE_DECISION_TREE)
    ) {
      CHATBOT_SERVICE_DECISION_TREE.forEach((service) => {
        if (service.recommend) {
          fallback += "• " + service.recommend + "\n";
        }
      });
    }

    fallback += "\nOr type Need suggestion and I’ll guide you.";

    return fallback;
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  saveLead(session) {
    const lead = {
      name: session.name,
      email: session.email,
      phone: session.phone,
      service: session.selectedService,
      useCase: session.selectedUseCase,
      timeline: session.timeline,
      budget: session.budget,
      requirement: session.requirement,
      createdAt: new Date().toISOString(),
    };

    console.log("New Lead Captured:", lead);

    /*
      TODO for production:
      Save this lead into your database, CRM, Google Sheet, email, or API.

      Example:
      await saveLeadToDatabase(lead);
      await sendLeadEmail(lead);
      await sendLeadToCRM(lead);
    */
  }
}

module.exports = botActivityHandler;
