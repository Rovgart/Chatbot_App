import { fetchLogin, loginUser } from "@/app/actions";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import GoogleSignIn from "../Buttons/GoogleSignIn";
import SignIn from "../Buttons/SignIn";
import InputField from "../TextFields/InputField";
const LoginForm = () => {
  return (
    <>
      <fieldset className="h-full p-5 w-screen md:w-3/4 flex flex-col md:mx-auto gap-11 border border-sky-500 text-white">
        <h1 className=" text-4xl text-start border border-yellow-200 p-2 ">
          Sign In
        </h1>
        <span className="pl-8">Already have an account ?</span>
        <form
          className="flex w-full pl-12 pr-14  flex-col border-2 border-slate-500  justify-start p-8 text-black "
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
            if (userLogged) {
              cookies().set("token", userLogged.token);
              redirect("/Chatbot");
            }
            revalidatePath("/login");
          }}
        >
          <div className="p-4 flex flex-col gap-2 text-lg">
            <label className="text-anti-flash_white" htmlFor="email">
              Email
            </label>
            <InputField nameProp="email" className="p-2 " type={"email"} />
          </div>
          <div className="p-4 flex flex-col gap-2 text-lg ">
            <label className="text-anti-flash_white" htmlFor="password">
              Password
            </label>
            <InputField nameProp="password" className="p-2" type={"password"} />
          </div>
          <SignIn />
        </form>
        <div className="w-full flex gap-0 items-center border border-gray-600 ">
          <hr className="w-1/4 mx-auto" />
          <span className="text-sm italic tracking-wider">
            Try other methods
          </span>
          <hr className="w-1/4 mx-auto" />
        </div>
        <GoogleSignIn />
      </fieldset>
    </>
  );
};

export default LoginForm;
