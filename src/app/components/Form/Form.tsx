"use client";
import { getChatbotResponse } from "@/app/actions";
import { useChatbot } from "@/app/store/chatbot-context/ChatbotProvider";
import { revalidatePath } from "next/cache";
import React, { KeyboardEventHandler, useRef } from "react";
import SubmitButton from "../Buttons/SubmitButton";
import InputField from "../TextFields/InputField";
type Props = {};
const Form = (props: Props) => {
  const { message, setMessages } = useChatbot();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1500);
    });
    const message = e.target.prompt.value;
    console.log(message);
    const chatbotMessage = await getChatbotResponse(message);
    setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex  md:flex-row gap-4 order-3 w-full bg-inherit mb-20   "
    >
      <input
        type="text"
        className=" w-full border p-2 outline-dashed bg-celestial_blue-200 resize-none mx-auto rounded-lg outline-none text-anti-flash_white-900 "
        name="prompt"
        id=""
      />
      <SubmitButton
        hoverColor="dark_pastel_green"
        className="bg-space_cadet text-lg text-anti-flash_white-900 p-2.5 w-[220px] sm:w-auto"
        value="Send"
      />
    </form>
  );
};

export default Form;
