import { CHAT_KNOWLEDGE } from "@/data/chat-knowledge";

export type ServiceName = keyof typeof CHAT_KNOWLEDGE.services;

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

function scoreKeywordAgainstInput(input: string, inputTokens: string[], keyword: string) {
  const normalizedKeyword = normalizeText(keyword);
  const keywordTokens = tokenize(normalizedKeyword);

  let score = 0;

  if (!normalizedKeyword) return 0;

  // Strongest: exact full input match
  if (input === normalizedKeyword) {
    score += 100;
  }

  // Strong: exact phrase included
  if (input.includes(normalizedKeyword)) {
    score += normalizedKeyword.length > 8 ? 35 : 25;
  }

  // Strong: all keyword tokens present
  if (
    keywordTokens.length > 1 &&
    keywordTokens.every((token) => inputTokens.includes(token))
  ) {
    score += 28;
  }

  // Word-level scoring
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

      // Prefix accuracy check: 2nd/3rd-letter stability via first 3 chars
      // This is your requested extra disambiguation layer.
      if (
        kToken.length >= 4 &&
        iToken.length >= 4 &&
        getPrefix(kToken, 3) === getPrefix(iToken, 3)
      ) {
        score += 4;
      }

      // If first 2 letters differ but 2nd+3rd align, give weaker score
      if (
        kToken.length >= 4 &&
        iToken.length >= 4 &&
        kToken.slice(1, 3) === iToken.slice(1, 3)
      ) {
        score += 2;
      }

      // Bigram / trigram overlap for near matches and phrasing variance
      const bi = overlapScore(getBigrams(kToken), getBigrams(iToken));
      const tri = overlapScore(getTrigrams(kToken), getTrigrams(iToken));

      if (tri >= 2) score += 4;
      else if (bi >= 2) score += 2;
    }
  }

  return score;
}

export function matchIntent(text: string, keywords: string[]) {
  const input = normalizeText(text);
  return keywords.some((keyword) => input.includes(normalizeText(keyword)));
}

export function detectServiceFromKnowledge(inputText: string) {
  const input = normalizeText(inputText);
  const inputTokens = tokenize(input);

  const results: ServiceScore[] = [];

  const serviceEntries = Object.entries(
    CHAT_KNOWLEDGE.services
  ) as [ServiceName, readonly string[]][];

  for (const [service, keywords] of serviceEntries) {
    let score = 0;
    const matchedKeywords: string[] = [];

    for (const keyword of keywords) {
      const keywordScore = scoreKeywordAgainstInput(input, inputTokens, keyword);

      if (keywordScore > 0) {
        score += keywordScore;
        matchedKeywords.push(keyword);
      }
    }

    // Bonus if service name itself appears
    const serviceNameScore = scoreKeywordAgainstInput(
      input,
      inputTokens,
      service
    );
    score += serviceNameScore;

    results.push({
      service,
      score,
      matchedKeywords,
    });
  }

  results.sort((a, b) => b.score - a.score);

  const best = results[0];
  const second = results[1];

  // Minimum confidence threshold
  if (!best || best.score < 12) {
    return {
      service: null,
      confidence: "low" as const,
      scores: results,
    };
  }

  // If too close, avoid wrong routing
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