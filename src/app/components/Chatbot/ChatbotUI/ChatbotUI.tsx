"use client";
import { Oswald } from "next/font/google";
import React, { useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import Form from "../../Form/Form";
import SettingsCloud from "../../SettingsCloud/SettingsCloud";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useSettings } from "@/app/store/SettingsContext";
import ChatbotResponse from "../ChatbotResponse";
import Groq from "groq-sdk";
type Props = {};
const oswald = Oswald({ subsets: ["latin"] });

function ChatbotUI({}: Props) {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const { settings } = useSettings();
  useEffect(() => {
    console.log(settings);
  }, [settings]);

  return (
    <main className=" w-full md:col-[2/3]  relative  border border-slate-500 mx-auto overflow-hidden col-[1/-1] row-[1] rounded-lg">
      {/* Conversation chat */}
      <aside
        className={`md:mt-20 p-14 relative bg-${settings.background} flex  flex-col sm:h-full  justify-between h-full`}
      >
        <div className="flex flex-col gap-2 text-anti-flash_white-900  ">
          <h1
            className={`${oswald.className} tracking-wide text-2xl sm:text-4xl md:text-6xl mt-2 text-center `}
          >
            Our Chatbot
          </h1>
          <hr className="w-3/4 mx-auto mt-4" />
        </div>
        <picture className=" mt-2 ml-3 size-10 border md:hidden  border-anti-flash_white bg-inherit absolute top-0 left-0 rounded-full flex items-center justify-center">
          <CiSettings className="w-full h-full  text-anti-flash_white " />
        </picture>
        <div className="overflow-y-auto flex flex-col items-center pt-20 border border-anti-flash_white h-full">
          <ChatbotResponse
            chatbotMessage={"Can something unpredictable happen ?"}
          />
        </div>
        <Form />
        <SettingsCloud />
      </aside>
    </main>
  );
}

export default ChatbotUI;
