import React from "react";

function SignUpForm() {
  return (
    <>
      <fieldset>
        <label
          className="text-black md:text-2xl text-center text-lg"
          htmlFor="Email"
        >
          Email
        </label>
        <InputField
          nm="email"
          type="email"
          className=" p-1.5 outline-none text-anti-flash_white-100 "
        />
        <label
          className="text-black text-center md:text-2xl text-lg"
          htmlFor="password"
        >
          Password
        </label>
        <InputField
          nm="password"
          type={"password"}
          className="p-1.5 outline-none"
        />
        <SubmitButton
          hoverColor="dark_pastel_green"
          className="bg-space_cadet text-lg text-anti-flash_white-900 p-2.5 w-[220px] sm:w-auto"
          value="Sign Up"
        />
      </fieldset>
    </>
  );
}

export default SignUpForm;
