import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <li className="bg-dark_pastel_green p-2 rounded-full">
      <Link href={"/signup"}>Sign Up</Link>
    </li>
  );
};

export default SignUp;
