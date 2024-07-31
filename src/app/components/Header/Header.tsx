"use client";
import SignUp from "@/app/signup/page";
import { useAuth } from "@/app/store/Auth/AuthProvider";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SignIn from "../Buttons/SignIn";
import Hamburger from "../Hamburger/Hamburger";

function Header({ auth }: { auth: string }) {
  const [opened, setIsOpened] = useState(false);
  const hamburgerHandler = () => {
    setIsOpened((prev) => !prev);
  };
  const { token } = useAuth();
  console.log(token);
  return (
    <>
      <header className=" z-[999] flex items-center justify-around bg-payne_gray-100 border-2 shadow shadow-anti-flash_white fixed top-0 w-full h-[8vh] ">
        {/* Logo */}
        <picture className="size-20 "></picture>
        <nav className={`sm:block hidden text-anti-flash_white-700`}>
          {
            /* token ? <User> : */
            <ul className="flex items-center gap-4 ">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="p-2.5 bg-space_cadet-600 rounded-full">
                <Link href={"/login"}>Sign In</Link>
              </li>
              <li className="bg-space_cadet-500 rounded-full p-2.5">
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          }
        </nav>
        <GiHamburgerMenu
          onClick={hamburgerHandler}
          className="text-anti-flash_white text-4xl md:hidden block"
        />
        {opened && <Hamburger />}
      </header>
    </>
  );
}

export default Header;
