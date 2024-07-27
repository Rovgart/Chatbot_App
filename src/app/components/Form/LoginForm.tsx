import { login } from "@/app/lib/lib";
import React from "react";
import SignIn from "../Buttons/SignIn";
import InputField from "../TextFields/InputField";

const LoginForm = () => {
  return (
    <>
      <form
        className="pl-4 pr-6 flex flex-col h-full w-full  justify-around "
        action={async (formData: FormData) => {
          "use server";
          const user = {
            email: formData.get("email"),
            password: formData.get("password"),
          };
          await login(user);
        }}
      >
        <div className="p-4 flex flex-col gap-2 text-2xl">
          <label htmlFor="email">Email</label>
          <InputField className="p-2" type={"email"} />
        </div>
        <div className="p-4 flex flex-col gap-2 text-2xl ">
          <label htmlFor="password">Password</label>
          <InputField className="p-2" type={"password"} />
        </div>
        <SignIn />
      </form>
    </>
  );
};

export default LoginForm;
