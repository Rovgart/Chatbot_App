"use client";
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
    <header className="flex items-center justify-around">
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
        </ul>
      </nav>
      <GiHamburgerMenu
        onClick={hamburgerHandler}
        className="text-anti-flash_white text-4xl"
      />
      {opened && <Hamburger />}
    </header>
  );
}

export default Header;
