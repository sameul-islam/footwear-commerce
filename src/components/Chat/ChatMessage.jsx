import React from "react";

const ChatMessage = ({ message }) => {
  const isAI = message.type === "ai";

  return (
    <div
      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[75%] px-3 py-2 rounded-lg wrap-break-word font-Outfit text-sm ${
          isAI ? "bg-green-100 text-green-900" : "bg-gray-200 text-gray-900"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
