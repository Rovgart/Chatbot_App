"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa6";

function SettingsCloud() {
  return (
    <div className="w-[340px] hidden rounded-md h-[40vh] justify-start p-2 bg-anti-flash_white-900  flex-col gap-6 absolute top-0 ">
      <IoMdClose className="text-3xl" />
      <div className="flex items-center justify-around gap-4">
        <h1>Background</h1>
        <div className="size-5 border border-anti-flash_white-100">
          <span className="w-full h-full"></span>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-around">
        <h1>Theme</h1>
        {/* Theme toggle implement */}
        <div>
          <FaRegMoon className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default SettingsCloud;
