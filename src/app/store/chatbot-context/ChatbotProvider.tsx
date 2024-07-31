"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

type ChatbotResponse = {
  content: string;
  message: string;
};
type ChatbotContext = {
  messages: InitMessages;
  setMessages: React.Dispatch<React.SetStateAction<ChatbotResponse[]>>;
};
type InitMessages = ChatbotResponse[];
export const ChatbotContext = createContext<ChatbotContext | undefined>(
  undefined
);
export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatbotResponse[]>([]);
  return (
    <ChatbotContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatbotContext.Provider>
  );
};
export const useChatbot = () => {
  const chatbotContext = useContext(ChatbotContext);
  if (!chatbotContext) {
    throw new Error("useChatbot must be used within a ChatbotProvider");
  }
  return chatbotContext;
};

export default ChatbotProvider;
