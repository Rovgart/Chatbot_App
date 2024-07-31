import ChatbotProvider from "@/app/store/chatbot-context/ChatbotProvider";
import React from "react";
import ChatbotSettings from "./ChatbotSettings/ChatbotSettings";
import ChatbotUI from "./ChatbotUI/ChatbotUI";
type Props = {};

function Chatbot({}: Props) {
  return (
    <ChatbotProvider>
      <main className="h-screen grid grid-cols-chatbot_grid">
        <ChatbotSettings />
        <ChatbotUI />
      </main>
    </ChatbotProvider>
  );
}

export default Chatbot;
