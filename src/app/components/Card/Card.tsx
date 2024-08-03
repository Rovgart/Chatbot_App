import React from "react";
import CardItem from "./CardItem";

function Card() {
  const loremSample =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim minima eius.";
  return (
    <div className="flex mx-auto gap-12">
      <div className="flex flex-col gap-4 pt-12 border">
        <CardItem
          title="Create custom chatbots"
          description={
            "Design and build personalized chatbots tailored to your specific needs. These chatbots can handle customer inquiries, automate responses, and provide interactive experiences for users across various platforms."
          }
        />
        <CardItem
          title="Programming help tool"
          description={
            "Access a comprehensive programming assistance tool that offers solutions to coding challenges, debugging help, and best practices for writing efficient and effective code. Perfect for developers of all levels."
          }
        />
      </div>
      <div className="flex flex-col gap-4 pt-12">
        <CardItem
          title="Daily tasks"
          description={
            "Manage and organize your daily tasks with ease. This tool helps you prioritize and track your to-do list, ensuring you stay productive and on schedule throughout the day."
          }
        />
        <CardItem
          title="Answers for questions"
          description={
            "Get accurate and reliable answers to your questions across a wide range of topics. Whether you're looking for quick facts or in-depth explanations, this tool provides the information you need at your fingertips."
          }
        />
      </div>
    </div>
  );
}

export default Card;
