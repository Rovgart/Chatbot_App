"use client";
import { Oswald } from "next/font/google";
import React, { useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import Form from "../../Form/Form";
import SettingsCloud from "../../SettingsCloud/SettingsCloud";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useSettings } from "@/app/store/SettingsContext";

type Props = {};
const oswald = Oswald({ subsets: ["latin"] });

function ChatbotUI({}: Props) {
  const { settings } = useSettings();
  useEffect(() => {
    console.log(settings);
  }, [settings]);
  return (
    <main className="sm:h-[screen] w-full h-screen md:col-[2/3] relative  border border-slate-500 mx-auto overflow-hidden col-[1/-1] row-[1] rounded-lg">
      {/* Conversation chat */}
      <aside
        className={`md:mt-0 relative bg-${settings.background} flex  flex-col sm:h-full  justify-between h-full`}
      >
        <div className="flex flex-col gap-2 text-anti-flash_white-900  ">
          <h1
            className={`${oswald.className} tracking-wide text-2xl sm:text-4xl md:text-6xl mt-2 text-center `}
          >
            Our Chatbot
          </h1>
          <hr className="w-3/4 mx-auto mt-4" />
          <div className="border border-slate-500 h-full"></div>
        </div>
        <picture className=" mt-2 ml-3 size-10 border md:hidden  border-anti-flash_white bg-inherit absolute top-0 left-0 rounded-full flex items-center justify-center">
          <CiSettings className="w-full h-full  text-anti-flash_white " />
        </picture>
        <span className=" text-opacity-50 absolute left-[30%] top-[50%] text-celestial_blue-500  ">
          Start prompting
        </span>
        <div className="">I was just guessing numbers and figures</div>
        <Form />
        <SettingsCloud />
      </aside>
    </main>
  );
}

export default ChatbotUI;
