"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa6";
import { useUI } from "@/app/store/UIStateProvider";
import { HexColorInput } from "react-colorful";
import { CiUser } from "react-icons/ci";
function SettingsCloud() {
  const { closeSettingsCloudHandler } = useUI();
  return (
    <div className="w-full  border border-dark_pastel_green-300 rounded-md h-full bg-space_cadet-300 justify-start flex flex-col gap-3 absolute bottom-0 ">
      <IoMdClose
        onClick={closeSettingsCloudHandler}
        className=" text-anti-flash_white-900"
        size={50}
      />
      <div className="flex items-center justify-around gap-4 p-7">
        <picture className="size-12 rounded-full border border-anti-flash_white-900 flex items-center justify-center overflow-hidden">
          <CiUser size={90} />
        </picture>
        <h1>Username</h1>
      </div>
      <div className="flex items-center gap-5   ">
        <h1>Color scheme</h1>
        <HexColorInput
          className="border-none rounded-full size-10 p-1 "
          color="#ffffff"
        />
      </div>
      <div className="flex items-center gap-4 ">
        <h1>Font Style</h1>
        <select name="" id="">
          <option value="sans-serif">Sans-serif</option>
          <option value="montserrat">Montserrat</option>
          <option value="dancingScript">Dancing Script</option>
        </select>
      </div>
      <div className="flex  items-center gap-4">
        <h1>Background</h1>
        <HexColorInput
          className="border-none rounded-full size-10 p-1 "
          color="#ffffff"
        />
      </div>
    </div>
  );
}

export default SettingsCloud;
