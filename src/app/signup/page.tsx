import React from "react";
import RootLayout from "../layout";

function SignUp() {
  return (
    <>
      <form className=" z-[99999] flex items-center border border-white justify-center bg-dark_pastel_green-200 text-anti-flash_white-900">
        <label htmlFor="Email">Email</label>
        <input type="text" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="" />
        <input
          className="bg-dark_pastel_green-900"
          type="submit"
          value="Something is going on"
        />
      </form>
    </>
  );
}

export default SignUp;
