"use client";
import { useChatbot } from "@/app/store/chatbot-context/ChatbotProvider";
import React, { Suspense, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import Form from "../../Form/Form";
import ChatbotResponse from "../ChatbotResponse";
type Props = {};
function ChatbotWindow({}: Props) {
  const { messages } = useChatbot();
  useEffect(() => {
    console.log("messages changed");
    // get latest messages from groq and add them to the chatbot state
  }, [messages]);
  console.log(messages);
  return (
    <div className="overflow-y-auto md:p-3 p-1.5 flex flex-col items-center pt-20 border border-anti-flash_white h-full gap-8">
      <ChatbotResponse
        chatbotMessage={"Can something unpredictable happen ?"}
      />
      <Suspense fallback={<Audio />}>
        {messages.map((mess) => (
          <ChatbotResponse chatbotMessage={mess.message} />
        ))}
      </Suspense>
    </div>
  );
}

export default ChatbotWindow;
