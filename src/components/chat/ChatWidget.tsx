"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ChatBubble from "./ChatBubble";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

type ChatbotReply = {
  reply: string;
  quickReplies: string[];
};

const SESSION_STORAGE_KEY = "hnx_chat_session_id";
const MAX_MESSAGE_LENGTH = 1000;
const CHATBOT_TIMEOUT_MS = 20_000;
const API_FAILURE_MESSAGE =
  "Sorry, I'm having trouble connecting right now. Please try again in a moment.";
const UNKNOWN_REPLY_MESSAGE = "Sorry, I could not understand that.";

const WELCOME_MESSAGE =
  "Hi! I'm the HNX AI assistant. I can help with websites, mobile apps, CRM, SaaS, custom software, and AI automation. Tell me what you want to build, improve, or automate.";

const DEFAULT_QUICK_REPLIES = [
  "Build a website",
  "Create a mobile app",
  "CRM solution",
  "Build SaaS",
  "AI automation",
  "Talk to team",
];

const hiddenPrefixes = ["/admin", "/dashboard", "/login"];
let fallbackMessageCounter = 0;

function getBrowserCrypto() {
  return typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
}

function createMessageId() {
  const browserCrypto = getBrowserCrypto();

  if (browserCrypto?.randomUUID) {
    return browserCrypto.randomUUID();
  }

  fallbackMessageCounter += 1;
  return `chat-message-${Date.now()}-${fallbackMessageCounter}`;
}

function createChatMessage(role: ChatRole, content: string): ChatMessage {
  return {
    id: createMessageId(),
    role,
    content,
  };
}

function createSessionId() {
  const browserCrypto = getBrowserCrypto();

  if (browserCrypto?.randomUUID) {
    return browserCrypto.randomUUID();
  }

  return `hnx-session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getOrCreateSessionId() {
  if (typeof window === "undefined") {
    return createSessionId();
  }

  try {
    const existingSessionId = window.localStorage.getItem(SESSION_STORAGE_KEY);

    if (existingSessionId?.trim()) {
      return existingSessionId;
    }

    const sessionId = createSessionId();
    window.localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
    return sessionId;
  } catch {
    return createSessionId();
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getStringField(data: Record<string, unknown>, field: string) {
  const value = data[field];
  return typeof value === "string" ? value.trim() : "";
}

function extractBotReply(data: unknown) {
  if (!isRecord(data)) {
    return UNKNOWN_REPLY_MESSAGE;
  }

  const reply =
    getStringField(data, "reply") ||
    getStringField(data, "response") ||
    getStringField(data, "answer") ||
    getStringField(data, "message") ||
    getStringField(data, "text");

  return reply || UNKNOWN_REPLY_MESSAGE;
}

function extractQuickReplies(data: unknown) {
  if (!isRecord(data) || !Array.isArray(data.quickReplies)) {
    return [];
  }

  return data.quickReplies
    .filter((reply): reply is string => typeof reply === "string")
    .map((reply) => reply.trim())
    .filter(Boolean)
    .slice(0, 6);
}

async function readJsonResponse(response: Response): Promise<unknown> {
  const responseText = await response.text();

  if (!responseText) {
    return null;
  }

  try {
    return JSON.parse(responseText) as unknown;
  } catch {
    throw new Error("Invalid chatbot response JSON");
  }
}

async function fetchChatbotReply(
  sessionId: string,
  message: string,
): Promise<ChatbotReply> {
  const chatbotApiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

  if (!chatbotApiUrl) {
    throw new Error("Missing NEXT_PUBLIC_CHATBOT_API_URL");
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, CHATBOT_TIMEOUT_MS);

  try {
    const response = await fetch(chatbotApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
        message,
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Chatbot request failed with status ${response.status}`);
    }

    const data = await readJsonResponse(response);

    return {
      reply: extractBotReply(data),
      quickReplies: extractQuickReplies(data),
    };
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export default function ChatWidget() {
  const pathname = usePathname() ?? "";
  const shouldHide = hiddenPrefixes.some((prefix) => pathname.startsWith(prefix));
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: WELCOME_MESSAGE,
    },
  ]);
  const [quickReplies, setQuickReplies] =
    useState<string[]>(DEFAULT_QUICK_REPLIES);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const requestInFlightRef = useRef(false);
  const canSendMessage = input.trim().length > 0 && !loading;

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, quickReplies, loading, isOpen]);

  if (shouldHide) {
    return null;
  }

  async function handleSend(customText?: string) {
    if (requestInFlightRef.current || loading) return;

    const userText = (customText ?? input).trim().slice(0, MAX_MESSAGE_LENGTH);
    if (!userText) return;

    requestInFlightRef.current = true;
    setMessages((prev) => [...prev, createChatMessage("user", userText)]);
    setInput("");
    setQuickReplies([]);
    setLoading(true);

    try {
      const sessionId = getOrCreateSessionId();
      const chatbotReply = await fetchChatbotReply(sessionId, userText);

      setMessages((prev) => [
        ...prev,
        createChatMessage("assistant", chatbotReply.reply),
      ]);
      setQuickReplies(chatbotReply.quickReplies);
    } catch {
      setMessages((prev) => [
        ...prev,
        createChatMessage("assistant", API_FAILURE_MESSAGE),
      ]);
      setQuickReplies(DEFAULT_QUICK_REPLIES);
    } finally {
      requestInFlightRef.current = false;
      setLoading(false);
    }
  }

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[55] bg-slate-950/15 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed bottom-5 right-3 z-[60] flex h-[min(430px,calc(100vh-88px))] w-[330px] max-w-[calc(100vw-24px)] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-blue-200/90 bg-white shadow-[0_28px_90px_rgba(30,64,175,0.32)] ring-1 ring-blue-400/35 transition-all duration-300 ease-out dark:border-blue-300/25 dark:bg-slate-950 dark:ring-blue-300/25 sm:bottom-6 sm:right-3 sm:h-[460px] sm:w-[360px] motion-reduce:transition-none ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="relative flex justify-end border-b border-white/10 bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 px-3 py-2.5 text-white">
          <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-14 left-8 h-24 w-24 rounded-full bg-violet-400/20 blur-3xl" />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Minimize HNX AI assistant"
            className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span aria-hidden="true" className="text-base leading-none">
              x
            </span>
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-slate-50 px-3 py-3 dark:bg-slate-950">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              role={message.role}
              content={message.content}
            />
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                Typing...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {quickReplies.length > 0 && (
          <div className="border-t border-slate-200 bg-white px-3 py-2.5 dark:border-white/10 dark:bg-slate-950">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleSend(reply)}
                  disabled={loading}
                  className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-100"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-slate-200 bg-white px-3 pb-3 pt-2.5 dark:border-white/10 dark:bg-slate-950">
          <div className="rounded-2xl border border-slate-200 bg-white px-3 py-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) =>
                  setInput(e.target.value.slice(0, MAX_MESSAGE_LENGTH))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={loading}
                maxLength={MAX_MESSAGE_LENGTH}
                placeholder="Write a message..."
                className="min-w-0 flex-1 bg-transparent px-1 py-1.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-70 dark:text-white dark:placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!canSendMessage}
                aria-label="Send message"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 text-white shadow-[0_10px_24px_rgba(79,70,229,0.28)] transition hover:-translate-y-0.5 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                >
                  <path
                    d="M10 15.5v-11m0 0L5.5 9M10 4.5 14.5 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p className="mt-2 text-center text-[10px] font-medium text-slate-400">
            Powered by HNX Solutions
          </p>
        </div>
      </div>

      <div className="fixed bottom-24 right-3 z-50 sm:bottom-24 sm:right-3">
        {!isOpen && (
          <div className="absolute bottom-[76px] right-0 w-[176px] rounded-2xl border border-slate-200/80 bg-white px-3 py-2 text-left shadow-[0_14px_40px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-950 sm:bottom-[88px]">
            <p className="text-xs font-semibold text-slate-950 dark:text-white">
              Chat with our assistant
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
              It can guide you
            </p>
            <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-slate-200/80 bg-white dark:border-white/10 dark:bg-slate-950" />
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close HNX AI assistant" : "Open HNX AI assistant"}
          aria-expanded={isOpen}
          className={`group relative grid h-[52px] w-[52px] place-items-center rounded-full bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 text-white shadow-[0_18px_48px_rgba(79,70,229,0.36)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_24px_60px_rgba(79,70,229,0.46)] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 sm:h-[60px] sm:w-[60px] ${
            isOpen ? "ring-4 ring-blue-400/25" : ""
          }`}
        >
          <span className="absolute inset-0 -z-20 animate-[whatsappPulse_2.6s_ease-out_infinite] rounded-full bg-blue-500/30 motion-reduce:animate-none" />
          <span className="absolute -inset-3 -z-30 rounded-full bg-violet-500/25 blur-xl" />
          <span className="pointer-events-none absolute -top-1 left-2 h-1.5 w-1.5 animate-[whatsappSparkle_1.8s_ease-in-out_infinite] rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.95)] motion-reduce:animate-none" />
          <span className="pointer-events-none absolute right-1 top-2 h-1 w-1 animate-[whatsappSparkle_2.2s_ease-in-out_infinite_0.35s] rounded-full bg-blue-100/90 shadow-[0_0_10px_rgba(147,197,253,0.95)] motion-reduce:animate-none" />
          <span className="pointer-events-none absolute -bottom-1 right-3 h-1.5 w-1.5 animate-[whatsappSparkle_2s_ease-in-out_infinite_0.7s] rounded-full bg-violet-100/90 shadow-[0_0_10px_rgba(221,214,254,0.95)] motion-reduce:animate-none" />

          <span className="absolute right-2 top-2 h-3.5 w-3.5 rounded-full border-2 border-indigo-950 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)] sm:right-2.5 sm:top-2.5" />

          {isOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="relative z-10 h-6 w-6 transition-transform duration-200 group-hover:rotate-90 sm:h-7 sm:w-7"
              fill="none"
            >
              <path
                d="m6.5 6.5 11 11m0-11-11 11"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="relative z-10 h-7 w-7 transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-110 sm:h-8 sm:w-8"
              fill="none"
            >
              <path
                d="M12 3.5 13.8 9l5.7 1.2-5.7 1.2L12 17l-1.8-5.6-5.7-1.2L10.2 9 12 3.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              <path
                d="M5.5 17.5 6.2 20l2.3.5-2.3.5-.7 2-.7-2-2.3-.5 2.3-.5.7-2.5ZM18.5 16.5 19.4 19l2.6.5-2.6.6-.9 2.4-.9-2.4-2.6-.6 2.6-.5.9-2.5Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
