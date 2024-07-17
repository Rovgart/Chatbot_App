import { fetchAIResponse } from "@/app/actions";
import OpenAI from "openai";
import React from "react";

type Props = {};
const Form = (props: Props) => {
  const openai = new OpenAI();

  // const main = async (content: string) => {
  //   try {
  //     const completion = await openai.chat.completions.create({
  //       model: "gpt-3.5-turbo",
  //       temperature: 0.9,
  //       max_tokens: 200,
  //       messages: [
  //         {
  //           role: "user",
  //           content: content,
  //         },
  //       ],
  //     });
  //     console.log(completion);
  //   } catch (error: any) {
  //     throw new Error("OpenAI Error: " + error.message);
  //   }
  // };
  return (
    <form
      action={async (formData: FormData) => {
        "use server";
        const message = formData.get("message") as string;
      }}
      className="flex gap-4 order-3 bg-anti-flash_white-200 justify-center  "
    >
      <textarea
        className="p-2 resize-none w-full bg-space_cadet-400  rounded-lg outline-none"
        name="prompt"
        id=""
      />
      <button type="submit">FO</button>
    </form>
  );
};

export default Form;
