"use client";
import React from "react";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <button
      type={"submit"}
      className=" p-4 bg-space_cadet-700 rounded-full  hover:cursor-pointer text-anti-flash_white-900 text-lg"
    >
      Sign In
    </button>
  );
};

export default SignIn;
