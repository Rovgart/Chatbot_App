"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, ReactDOM } from "react";
import { IoMdClose } from "react-icons/io";

function Backdrop() {
  return (
    <div className=" bg-celestial_blue-100 bg-opacity-80 w-screen h-screen fixed top-0 "></div>
  );
}
function Content({ children }: { children: ReactNode }) {
  return (
    <div className="fixed  top-1/4 z-[9999] left-0 sm:left-[35.5%] shadow-space_cadet-600 shadow-lg rounded-xl  w-full h-[500px] sm:w-[450px] sm:h-[420px] border-celestial_blue-900 border-2 bg-anti-flash_white-500">
      {children}
    </div>
  );
}
function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div className="relative">
      <Backdrop />
      <Content>
        <IoMdClose
          className="absolute bg-dark_pastel_green-500 top-0  p-4 "
          onClick={() => router.back()}
          size={"2rem"}
        />
        {children}
      </Content>
    </div>
  );
}
export default Modal;
