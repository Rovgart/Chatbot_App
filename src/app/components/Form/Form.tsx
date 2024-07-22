import { fetchAIResponse } from "@/app/actions";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import { env } from "process";
import React, { KeyboardEventHandler, useRef } from "react";

type Props = {};
const Form = (props: Props) => {
  const genai = new GoogleGenerativeAI(
    "AIzaSyBVFD_WEoo_ZJSzd-cygHEFXERPj9PRfJo"
  );

  const model = genai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const startChat = async (prompt: string) => {
    try {
      const chat = model.startChat({ history: [] });

      const response = await chat.sendMessage(prompt);

      if (!response) {
        throw new Error("Something went wrong!");
      }
      console.log(response);
      return response.response.text;
    } catch (error: any) {
      console.error(error?.message);
    }
  };
  return (
    <form
      action={async (formData: FormData) => {
        const message = formData.get("prompt");
        await startChat(message as string);
      }}
      className="flex flex-col md:flex-row   gap-4 order-3 w-full bg-inherit mb-20   "
    >
      <input
        type="text"
        className=" w-3/4 border pl-2 pt-2 border-celestial_blue bg-celestial_blue-200 resize-none mx-auto rounded-lg outline-none text-anti-flash_white-900 "
        name="prompt"
        id=""
      />
      <input type="submit" hidden />
    </form>
  );
};

export default Form;
