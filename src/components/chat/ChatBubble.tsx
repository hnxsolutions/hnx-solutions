type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-6 ${
          isUser
            ? "bg-black text-white rounded-br-md"
            : "bg-gray-100 text-black rounded-bl-md"
        }`}
      >
        {content}
      </div>
    </div>
  );
}