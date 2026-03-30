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

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m the AI assistant for hnx.services. I can help with websites, mobile apps, software, CRM, and AI automation. What would you like help with?",
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
    if (hasSubmittedLeadRef.current) {
      return;
    }

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
            "Your request has been shared with our team. We’ll contact you soon.",
        },
      ]);

      setQuickReplies(["Need another service", "Talk to team"]);
    } catch (error) {
      hasSubmittedLeadRef.current = false;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn’t save your request right now. Please share your details again or contact our team directly.",
        },
      ]);
    }
  }

  function resetConversation() {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi, I’m the AI assistant for hnx.services. I can help with websites, mobile apps, software, CRM, and AI automation. What would you like help with?",
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
    } catch (error) {
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
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-lg"
      >
        {isOpen ? "Close" : "Chat with us"}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[600px] w-[360px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="border-b border-gray-200 bg-black px-4 py-3 text-white">
            <h3 className="text-sm font-semibold">hnx.services Assistant</h3>
            <p className="mt-1 text-xs text-gray-300">
              AI assistant for service inquiries and lead support
            </p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {messages.map((message, index) => (
              <ChatBubble
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-gray-100 px-4 py-2 text-sm text-gray-600">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {quickReplies.length > 0 && (
            <div className="border-t border-gray-100 px-3 py-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700 transition hover:bg-gray-100"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 p-3">
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
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
              />
              <button
                onClick={() => handleSend()}
                disabled={loading}
                className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}