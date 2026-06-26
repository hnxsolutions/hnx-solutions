"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ChatBubble from "./ChatBubble";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatResponse =
  | {
      mode: "text";
      message: string;
      quickReplies?: string[];
      collected?: Record<string, string>;
      nextField?: string;
    }
  | {
      mode: "action";
      action: "save_lead";
      message: string;
      data: {
        name: string;
        email: string;
        phone?: string;
        projectType: string;
        budget?: string;
        message: string;
        chatTranscript: Message[];
      };
    };

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
let fallbackSubmissionCounter = 0;

function createSubmissionKey() {
  const browserCrypto =
    typeof globalThis !== "undefined" ? globalThis.crypto : undefined;

  if (browserCrypto?.randomUUID) {
    return browserCrypto.randomUUID();
  }

  if (browserCrypto?.getRandomValues) {
    const values = new Uint32Array(2);
    browserCrypto.getRandomValues(values);
    return `lead-${Array.from(values)
      .map((value) => value.toString(36))
      .join("-")}`;
  }

  fallbackSubmissionCounter += 1;
  return `lead-${fallbackSubmissionCounter}`;
}

export default function ChatWidget() {
  const pathname = usePathname() ?? "";
  const shouldHide = hiddenPrefixes.some((prefix) => pathname.startsWith(prefix));
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: WELCOME_MESSAGE,
    },
  ]);
  const [quickReplies, setQuickReplies] =
    useState<string[]>(DEFAULT_QUICK_REPLIES);
  const [loading, setLoading] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const hasSubmittedLeadRef = useRef(false);
  const submissionKeyRef = useRef("");

  const hasStartedChat = messages.some((message) => message.role === "user");

  useEffect(() => {
    if (!hasStartedChat) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, quickReplies, loading, hasStartedChat]);

  if (shouldHide) {
    return null;
  }

  async function saveLead(leadData: {
    name: string;
    email: string;
    phone?: string;
    projectType: string;
    budget?: string;
    message: string;
    chatTranscript: Message[];
  }) {
    if (hasSubmittedLeadRef.current) return;

    hasSubmittedLeadRef.current = true;
    submissionKeyRef.current ||= createSubmissionKey();

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...leadData,
          submissionKey: submissionKeyRef.current,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        hasSubmittedLeadRef.current = false;
        throw new Error(data?.error || "Failed to save lead");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thanks - your request has been shared with our team. We'll contact you soon. Meanwhile, you can also ask about pricing, timeline, features, or another service.",
        },
      ]);

      setQuickReplies([
        "Ask another question",
        "Need another service",
        "Pricing",
        "Project timeline",
        "Talk to team",
      ]);
    } catch {
      hasSubmittedLeadRef.current = false;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't save your request right now. Please try again or contact our team directly.",
        },
      ]);

      setQuickReplies(DEFAULT_QUICK_REPLIES);
    }
  }

  function resetConversation() {
    setMessages([
      {
        role: "assistant",
        content: WELCOME_MESSAGE,
      },
    ]);
    setQuickReplies(DEFAULT_QUICK_REPLIES);
    setInput("");
    hasSubmittedLeadRef.current = false;
    submissionKeyRef.current = createSubmissionKey();
  }

  async function handleSend(customText?: string) {
    const userText = (customText ?? input).trim();
    if (!userText || loading) return;

    if (userText === "Need another service") {
      resetConversation();
      return;
    }

    if (userText === "Ask another question") {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "Ask another question" },
        {
          role: "assistant",
          content:
            "Sure - ask me anything about websites, mobile apps, CRM, SaaS, software, or AI automation.",
        },
      ]);
      setQuickReplies([
        "Pricing",
        "Project timeline",
        "Recommended features",
        "Talk to team",
      ]);
      return;
    }

    if (userText === "Pricing") {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "Pricing" },
        {
          role: "assistant",
          content:
            "Pricing depends on the project type, features, complexity, and timeline. Tell me what you want to build, and I'll help you with an estimated range.",
        },
      ]);
      setQuickReplies([
        "Build a website",
        "Create a mobile app",
        "CRM solution",
        "Build SaaS",
        "AI automation",
      ]);
      return;
    }

    if (userText === "Project timeline") {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "Project timeline" },
        {
          role: "assistant",
          content:
            "Timeline depends on scope and complexity. A simple website may take days, while a custom app, CRM, or SaaS platform can take weeks. Tell me your requirement and I'll guide you better.",
        },
      ]);
      setQuickReplies([
        "Build a website",
        "Create a mobile app",
        "CRM solution",
        "Build SaaS",
        "AI automation",
      ]);
      return;
    }

    if (userText === "Recommended features") {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "Recommended features" },
        {
          role: "assistant",
          content:
            "Recommended features depend on your project type. For example, websites may need lead forms, SEO pages, and admin control, while apps or SaaS products may need login, dashboards, payments, notifications, and automation. Tell me what you want to build and I'll suggest the best features.",
        },
      ]);
      setQuickReplies([
        "Build a website",
        "Create a mobile app",
        "CRM solution",
        "Build SaaS",
        "AI automation",
      ]);
      return;
    }

    if (userText === "Talk to team") {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "Talk to team" },
        {
          role: "assistant",
          content:
            "Sure - please share your requirement, name, and email, and our team will reach out shortly.",
        },
      ]);
      setQuickReplies([]);
      return;
    }

    const isFirstUserMessage = !messages.some(
      (message) => message.role === "user",
    );

    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];

    setMessages(updatedMessages);
    setInput("");
    setQuickReplies([]);
    setLoading(true);

    if (isFirstUserMessage) {
      requestAnimationFrame(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      });
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data: ChatResponse = await res.json();

      if (!res.ok) {
        throw new Error("Chat request failed");
      }

      if (data.mode === "text") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
        setQuickReplies(data.quickReplies || []);
      } else if (data.mode === "action" && data.action === "save_lead") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);

        await saveLead({
          ...data.data,
          chatTranscript: updatedMessages,
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again in a moment.",
        },
      ]);
      setQuickReplies(DEFAULT_QUICK_REPLIES);
    } finally {
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

        <div
          ref={messagesContainerRef}
          className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-slate-50 px-3 py-3 dark:bg-slate-950"
        >
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
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
                  className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-100"
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
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Write a message..."
                className="min-w-0 flex-1 bg-transparent px-1 py-1.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => handleSend()}
                disabled={loading}
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
