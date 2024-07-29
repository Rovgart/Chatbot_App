import { getGroqChatCompletion } from "@/app/actions";
import OpenAI from "openai";
import React, { KeyboardEventHandler, useRef } from "react";

type Props = {};
const Form = (props: Props) => {
  return (
    <form
      action={async (formData: FormData) => {
        const message = formData.get("prompt");
        await getGroqChatCompletion(message as string);
      }}
      className="flex flex-col md:flex-row gap-4 order-3 w-full bg-inherit mb-20   "
    >
      <input
        type="text"
        className=" w-3/4 border p-2 outline-dashed bg-celestial_blue-200 resize-none mx-auto rounded-lg outline-none text-anti-flash_white-900 "
        name="prompt"
        id=""
      />
      <input type="submit" hidden />
    </form>
  );
};

export default Form;
