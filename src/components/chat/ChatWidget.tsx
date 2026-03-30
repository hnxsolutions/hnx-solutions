"use client";

import { useEffect, useRef, useState } from "react";
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
  "Hi, I’m the AI assistant for hnx.services. I can help with websites, mobile apps, software, CRM, and AI automation. What would you like help with?";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: WELCOME_MESSAGE,
    },
  ]);
  const [quickReplies, setQuickReplies] = useState<string[]>([
    "Website",
    "Mobile App",
    "Software",
    "CRM",
  ]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const hasSubmittedLeadRef = useRef(false);
  const submissionKeyRef = useRef(
    typeof crypto !== "undefined" ? crypto.randomUUID() : `lead-${Date.now()}`
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, quickReplies, loading]);

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
            "Thanks — your request has been shared with our team. We’ll contact you soon.",
        },
      ]);

      setQuickReplies(["Need another service", "Talk to team"]);
    } catch {
      hasSubmittedLeadRef.current = false;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn’t save your request right now. Please try again or contact our team directly.",
        },
      ]);

      setQuickReplies(["Website", "Mobile App", "Software", "CRM"]);
    }
  }

  function resetConversation() {
    setMessages([
      {
        role: "assistant",
        content: WELCOME_MESSAGE,
      },
    ]);
    setQuickReplies(["Website", "Mobile App", "Software", "CRM"]);
    setInput("");
    hasSubmittedLeadRef.current = false;
    submissionKeyRef.current =
      typeof crypto !== "undefined"
        ? crypto.randomUUID()
        : `lead-${Date.now()}`;
  }

  async function handleSend(customText?: string) {
    const userText = (customText ?? input).trim();
    if (!userText || loading) return;

    if (userText === "Need another service") {
      resetConversation();
      return;
    }

    if (userText === "Talk to team") {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: "Talk to team" },
        {
          role: "assistant",
          content:
            "Sure — please share your requirement, name, and email, and our team will reach out shortly.",
        },
      ]);
      setQuickReplies([]);
      return;
    }

    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];

    setMessages(updatedMessages);
    setInput("");
    setQuickReplies([]);
    setLoading(true);

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
      setQuickReplies(["Website", "Mobile App", "Software", "CRM"]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-black px-4 py-3 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:scale-[1.02]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
            ✦
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold">Chat with us</p>
            <p className="text-[11px] text-gray-300">AI support assistant</p>
          </div>
        </button>
      )}

      {isOpen && (
        <div
          className="
            fixed bottom-5 right-5 z-50
            flex flex-col overflow-hidden
            rounded-2xl border border-white/20 bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.20)]
            w-[350px] max-w-[calc(100vw-24px)]
            h-[min(600px,calc(100vh-120px))]
            sm:w-[380px]
          "
        >
          <div className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-4 pb-4 pt-4 text-white sm:px-5 sm:pb-5 sm:pt-5">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <span className="text-xl">✦</span>
                  <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-zinc-900 bg-emerald-400" />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold sm:text-base">
                    hnx.services
                  </h3>
                  <p className="text-xs text-gray-300 sm:text-sm">
                    AI assistant
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="shrink-0 rounded-full bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20"
              >
                ✕
              </button>
            </div>

            <div className="relative mt-4 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur sm:mt-5 sm:p-4">
              <p className="text-sm font-medium leading-6">
                Welcome! I can help you with websites, mobile apps, CRM, SaaS,
                software, and AI automation.
              </p>
              <p className="mt-2 text-xs text-gray-300">
                Share your requirement and I’ll guide you step by step.
              </p>
            </div>
          </div>

          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-[#f7f7f8] px-3 py-4 sm:px-4">
            {messages.map((message, index) => (
              <ChatBubble
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {quickReplies.length > 0 && (
            <div className="border-t border-gray-200 bg-white px-3 py-3 sm:px-4">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-black hover:bg-black hover:text-white"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 bg-white px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
            <div className="rounded-2xl border border-gray-300 bg-white px-3 py-2 shadow-sm">
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
                  className="flex-1 bg-transparent px-1 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  onClick={() => handleSend()}
                  disabled={loading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:scale-[1.03] disabled:opacity-50"
                >
                  ↑
                </button>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-gray-400">
              Powered by hnx.services AI assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
}