"use client";
import { getChatbotResponse } from "@/app/actions";
import { useChatbot } from "@/app/store/chatbot-context/ChatbotProvider";
import React, { FormEvent, FormEventHandler } from "react";
import SubmitButton from "../Buttons/SubmitButton";
const Form = () => {
  const { setMessages } = useChatbot();
  const handleSubmit = async (e: FormEventHandler<HTMLFormElement>) => {
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
      className="flex flex-col md:flex-row text-black gap-4 order-3 w-full bg-inherit mb-20   "
    >
      <input
        type="text"
        className=" w-full border p-2 outline-dashed  resize-none mx-auto rounded-lg outline-none "
        name="prompt"
        id=""
      />
      <SubmitButton
        hoverColor="dark_pastel_green"
        className="bg-space_cadet text-lg text-anti-flash_white-900 p-2.5 w-[220px] mx-auto sm:w-auto"
        value="Send"
      />
    </form>
  );
};

export default Form;
