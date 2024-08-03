"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "../MobileMenu/MobileMenu";
import ChatbotLogo from "../../../../assets/logo.png";
import Image from "next/image";
function Header() {
  const [opened, setIsOpened] = useState(false);
  const hamburgerHandler = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <header className=" z-[999] p-4  flex items-center justify-around bg-payne_gray-100   fixed top-0 w-full h-[12vh]">
        {/* Logo */}
        <picture className=" h-full flex items-center  ">
          <Image
            className="w-full h-full object-cover"
            src={ChatbotLogo}
            alt="logo"
          />
        </picture>
        <nav className={`md:block hidden text-anti-flash_white-700`}>
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
        {opened && <MobileMenu />}
      </header>
    </>
  );
}

export default Header;
