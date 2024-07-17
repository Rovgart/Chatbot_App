import Link from "next/link";
import React from "react";

type Props = {};

function Hamburger(props: Props) {
  return (
    <nav className="sm:hidden fixed top-0 left-0 border-r-anti-flash_white border-r h-full w-[60vw] p-4 text-center bg-space_cadet-100 z-[800]">
      <ul className="text-anti-flash_white-600 text-2xl gap-4 flex flex-col ">
        <li>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href={"/About"}>
            <p>About us</p>
          </Link>
        </li>
        <li>
          <Link href={"/Contact"}>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Hamburger;
