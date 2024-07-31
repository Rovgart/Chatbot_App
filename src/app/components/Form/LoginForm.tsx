import { fetchLogin, loginUser } from "@/app/actions";
import { login } from "@/app/lib/lib";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import SignIn from "../Buttons/SignIn";
import InputField from "../TextFields/InputField";
const LoginForm = () => {
  return (
    <>
      <form
        className="pl-4 mt-40 pr-6 flex mx-auto items-center flex-col h-full w-1/2  justify-center "
        action={async (formData: FormData) => {
          "use server";
          const user = {
            email: formData.get("email"),
            password: formData.get("password"),
          };
          await new Promise<void>((res) => {
            setTimeout(() => {
              res();
            }, 2000);
          });
          const userLogged = await fetchLogin(user);
          if (userLogged) redirect("/Chatbot");
          revalidatePath("/login");
          cookies().set("token", userLogged.token);
        }}
      >
        <div className="p-4 flex flex-col gap-2 text-lg">
          <label className="text-anti-flash_white" htmlFor="email">
            Email
          </label>
          <InputField nameProp="email" className="p-2" type={"email"} />
        </div>
        <div className="p-4 flex flex-col gap-2 text-lg ">
          <label className="text-anti-flash_white" htmlFor="password">
            Password
          </label>
          <InputField nameProp="password" className="p-2" type={"password"} />
        </div>
        <SignIn />
      </form>
    </>
  );
};

export default LoginForm;
