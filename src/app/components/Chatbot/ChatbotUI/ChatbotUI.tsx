"use client";
import { Oswald } from "next/font/google";
import React, { useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import Form from "../../Form/Form";
import SettingsCloud from "../../SettingsCloud/SettingsCloud";
import { useSettings } from "@/app/store/SettingsContext";
import ChatbotResponse from "../ChatbotResponse";
import Groq from "groq-sdk";

import ChatbotWindow from "../ChatbotWindow/ChatbotWindow";
import { getChatbotResponse } from "@/app/actions";
const oswald = Oswald({ subsets: ["latin"] });
async function ChatbotUI() {
  const API_KEY = process.env.GROQ_API_KEY;
  const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const { settings, setSettings } = useSettings();
  const currentBgColor = settings.background.default;
  return (
    <main
      style={{ backgroundColor: currentBgColor }}
      className={` w-full md:col-[2/3]  relative  border border-slate-500 md:mx-auto overflow-hidden col-[1/-1] row-[1] rounded-lg`}
    >
      {/* Conversation chat */}
      <aside
        className={`md:mt-20 mt-20  md:p-14 p-2 relative flex  flex-col sm:h-full  justify-between h-full`}
      >
        <div className="flex flex-col gap-2 text-anti-flash_white-900  ">
          <h1
            className={`${oswald.className} tracking-wide text-4xl md:text-6xl mt-2 text-center `}
          >
            Our Chatbot
          </h1>
          <hr className="w-3/4 mx-auto mt-4" />
        </div>
        <picture className=" mt-2 ml-3 size-10 border md:hidden  border-anti-flash_white bg-inherit absolute top-0 left-0 rounded-full flex items-center justify-center">
          <CiSettings className="w-full h-full  text-anti-flash_white " />
        </picture>
        <ChatbotWindow />
        <Form />
        <SettingsCloud />
      </aside>
    </main>
  );
}

export default ChatbotUI;
