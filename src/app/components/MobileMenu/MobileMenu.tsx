import Link from "next/link";
import React from "react";

function MobileMenu() {
  return (
    <nav className="sm:hidden fixed top-0 left-0 border-r-anti-flash_white border-r h-full w-[60vw] p-4 text-center bg-space_cadet-100 z-[800]">
      <ul className="text-anti-flash_white-600 text-2xl gap-4 flex flex-col ">
        <li>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
        </li>
        <li className="p-2.5 bg-space_cadet-600 rounded-full">
          <Link href={"/login"}>Sign In</Link>
        </li>
        <li className="bg-space_cadet-500 rounded-full p-2.5">
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
