import React from "react";
import { RiRobot2Line } from "react-icons/ri";
type ChatbotResponseProps = {
  chatbotMessage: string;
};

function ChatbotResponse({ chatbotMessage }: ChatbotResponseProps) {
  return (
    <div className="flex items-center gap-6">
      <picture className="size-20 rounded-full border p-1.5 border-anti-flash_white overflow-hidden bg-space_cadet-600">
        <RiRobot2Line className=" h-full w-full text-anti-flash_white-900  " />
      </picture>
      <span className="text-anti-flash_white-900"> {chatbotMessage}</span>
    </div>
  );
}

export default ChatbotResponse;
