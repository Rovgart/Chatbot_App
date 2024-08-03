import React from "react";
import { RiRobot2Fill } from "react-icons/ri";

type CardItemProps = {
  title: string;
  description: string;
};

function CardItem({ title, description }: CardItemProps) {
  return (
    <div className=" p-4 h-[24ch] flex rounded-md  flex-col shadow-md bg-space_cadet-600 shadow-payne_gray-900 gap-4 items-center text-white ">
      <RiRobot2Fill size={"3rem"} />
      <h2 className="text-3xl">{title}</h2>
      <p className="text-sm  text-anti-flash_white-500">{description}</p>
    </div>
  );
}

export default CardItem;
