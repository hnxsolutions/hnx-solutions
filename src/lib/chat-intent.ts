import { CHAT_KNOWLEDGE } from "@/data/chat-knowledge";

export type ServiceName = keyof typeof CHAT_KNOWLEDGE.services;
export type ServiceConfig = (typeof CHAT_KNOWLEDGE.services)[ServiceName];

type ServiceScore = {
  service: ServiceName;
  score: number;
  matchedKeywords: string[];
};

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

export function matchIntent(text: string, keywords: readonly string[]) {
  const input = normalizeText(text);
  return keywords.some((keyword) => input.includes(normalizeText(keyword)));
}

export function getServiceConfig(service: ServiceName): ServiceConfig {
  return CHAT_KNOWLEDGE.services[service];
}

export function detectServiceFromKnowledge(inputText: string) {
  const input = normalizeText(inputText);
  const inputTokens = tokenize(input);

  const serviceEntries = Object.entries(
    CHAT_KNOWLEDGE.services
  ) as [ServiceName, ServiceConfig][];

  const results: ServiceScore[] = serviceEntries.map(([service, config]) => {
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