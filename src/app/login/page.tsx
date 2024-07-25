import React from "react";
import InputField from "../components/TextFields/InputField";
import { login } from "../lib/lib";

const Login = () => {
  return (
    <form
      className="bg-space_cadet-900 w-full h-full flex flex-col items-center"
      action={async (formData: FormData) => {
        "use server";
        const user = {
          email: formData.get("email"),
          password: formData.get("password"),
        };
        await login(user);
      }}
    >
      <label htmlFor="email">Email</label>
      <InputField type={"email"} />
      <label htmlFor="password">Password</label>
      <InputField type={"password"} />
    </form>
  );
};

export default Login;
