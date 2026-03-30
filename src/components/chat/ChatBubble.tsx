type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-[14px] leading-6 shadow-sm sm:max-w-[82%] ${
          isUser
            ? "rounded-br-md bg-black text-white"
            : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  );
}