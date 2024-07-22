"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "../Hamburger/Hamburger";

type Props = {};

function Header() {
  const [opened, setIsOpened] = useState(false);
  const hamburgerHandler = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <header className=" z-[999] flex items-center justify-around bg-payne_gray-100 border-2 border-anti-flash_white fixed top-0 w-full ">
      {/* Logo */}
      <picture className="size-20 "></picture>
      <nav className={`sm:block hidden text-anti-flash_white-700`}>
        <ul className="flex items-center gap-4 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <Link href={"/signup"}>Sign Up</Link>
        </ul>
      </nav>
      <GiHamburgerMenu
        onClick={hamburgerHandler}
        className="text-anti-flash_white text-4xl md:hidden block"
      />
      {opened && <Hamburger />}
    </header>
  );
}

export default Header;
