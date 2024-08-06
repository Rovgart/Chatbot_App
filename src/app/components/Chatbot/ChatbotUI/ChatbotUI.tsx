"use client";
import { Oswald } from "next/font/google";
import React from "react";
import { CiSettings } from "react-icons/ci";
import Form from "../../Form/Form";
import SettingsCloud from "../../SettingsCloud/SettingsCloud";
import { useSettings } from "@/app/store/SettingsContext";
import Groq from "groq-sdk";
import ChatbotWindow from "../ChatbotWindow/ChatbotWindow";
import { useUI } from "@/app/store/UIStateProvider";
const oswald = Oswald({ subsets: ["latin"] });
function ChatbotUI() {
  const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const { settings, setSettings, selectedBackground } = useSettings();
  const currentTextColor = settings.background.default.textColor;
  const { openSettingsCloudHandler, uiState } = useUI();
  const { settingsCloud } = uiState;
  return (
    <main
      style={{
        backgroundColor: selectedBackground,
        color: currentTextColor,
      }}
      className={` w-full md:col-[2/3]  relative  border border-slate-500 md:mx-auto overflow-hidden col-[1/-1] row-[1/-1] rounded-lg`}
    >
      {/* Conversation chat */}
      <aside
        className={`md:mt-20  md:p-14 p-2 gap-10 relative flex  flex-col sm:h-full  justify-between h-full`}
      >
        <div className="flex flex-col gap-2   ">
          <h1
            className={`${oswald.className} tracking-wide text-4xl md:text-6xl mt-2 text-center `}
          >
            Our Chatbot
          </h1>
          <hr className="w-3/4 mx-auto mt-4" />
        </div>
        <picture className=" mt-2 ml-3 size-10 border md:hidden  border-anti-flash_white bg-inherit absolute top-0 left-0 rounded-full flex items-center justify-center">
          <CiSettings
            onClick={openSettingsCloudHandler}
            className="w-full h-full  "
          />
        </picture>
        <ChatbotWindow />
        <Form />
        {settingsCloud && <SettingsCloud />}
      </aside>
    </main>
  );
}

export default ChatbotUI;
