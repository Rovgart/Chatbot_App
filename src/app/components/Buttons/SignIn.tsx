"use client";
import React from "react";
import { useFormStatus } from "react-dom";
const SignIn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type={"submit"}
      className="p-2 bg-space_cadet-700 rounded-md  hover:cursor-pointer w-1/2 self-center text-anti-flash_white-900 text-lg"
    >
      Sign In
    </button>
  );
};

export default SignIn;
