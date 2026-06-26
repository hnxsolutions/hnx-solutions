type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-3 py-2.5 text-[13px] leading-5 shadow-sm sm:max-w-[82%] ${
          isUser
            ? "rounded-br-md bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 text-white shadow-[0_12px_26px_rgba(79,70,229,0.22)]"
            : "rounded-bl-md border border-slate-200 bg-white text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  );
}
