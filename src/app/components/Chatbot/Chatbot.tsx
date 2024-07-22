import React from "react";
import ChatbotSettings from "./ChatbotSettings/ChatbotSettings";
import ChatbotUI from "./ChatbotUI/ChatbotUI";
type Props = {};

function Chatbot({}: Props) {
  return (
    <main className="h-screen grid grid-cols-chatbot_grid">
      <ChatbotSettings />
      <ChatbotUI />
    </main>
  );
}

export default Chatbot;
