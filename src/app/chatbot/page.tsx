import React from "react";
import Chatbot from "../components/Chatbot/Chatbot";
type Props = {};

const Page = (props: Props) => {
  const API_KEY = process.env.GROQ_API_KEY;
  console.log(API_KEY);
  return (
    <div className="h-full w-full">
      <Chatbot />
    </div>
  );
};

export default Page;
