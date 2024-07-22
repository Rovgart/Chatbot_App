import { Oswald } from "next/font/google";
import React from "react";
import ChatbotUI from "./components/Chatbot/ChatbotUI/ChatbotUI";
import Form from "./components/Form/Form";
type Props = {};

const oswald = Oswald({ subsets: ["latin"] });
function GeneratorPage({}: Props) {
  return (
    <main className=" h-screen w-3/4 mx-auto text-anti-flash_white-900 flex flex-col justify-around  font-barlow-condensed ">
      <div className="h-[50vw] flex flex-col gap-8">
        <ChatbotUI />
      </div>
    </main>
  );
}

export default GeneratorPage;
