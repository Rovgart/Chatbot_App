import { useUI } from "@/app/store/UIStateProvider";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

function MobileMenu() {
  const { closeMobileMenuHandler } = useUI();
  return (
    <nav className="md:hidden fixed top-0 left-0 border-r-anti-flash_white border-r h-full w-screen p-4  bg-space_cadet-100 z-[800]">
      <IoMdClose
        onClick={closeMobileMenuHandler}
        className="absolute top-0 left-0 text-white"
        size={40}
      />
      <ul className="text-anti-flash_white-600 mt-12 text-2xl gap-4 flex flex-col text-center ">
        <li>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
        </li>
        <li className="p-2.5 w-1/2 mx-auto bg-space_cadet-600 rounded-full">
          <Link href={"/login"}>Sign In</Link>
        </li>
        <li className="bg-space_cadet-500 mx-auto w-1/2 rounded-full p-2.5">
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
