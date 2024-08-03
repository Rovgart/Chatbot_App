import { redirect } from "next/navigation";
import React, { useContext } from "react";
import { useFormState } from "react-dom";
import { signUpUser } from "../actions";
import SubmitButton from "../components/Buttons/SubmitButton";
import InputField from "../components/TextFields/InputField";
import RootLayout from "../layout";
import { login } from "../lib/lib";
import Image from "next/image";
import { TbMessageChatbot } from "react-icons/tb";
import Checkbox from "../components/Checkbox/checkbox";
import AuthProvider, { useAuth } from "../store/Auth/AuthProvider";
import { cookies } from "next/headers";
export default function SignUp() {
  return (
    <>
      <RootLayout>
        <form
          action={async (formData: FormData) => {
            "use server";
            const user = {
              username: formData.get("username"),
              email: formData.get("email"),
              password: formData.get("password"),
              repeatedPassword: formData.get("repeatedPassword"),
              agreeTerms: formData.get("agreeTerms"),
            };
            await new Promise((res) => {
              setTimeout(() => {
                res();
              }, 3000);
            });
            const signUpUserValid = await signUpUser(user);
            if (signUpUserValid) {
              // setToken(signUpUserValid);
              cookies().set("token", signUpUserValid?.token);
              redirect("/Chatbot");
            }
          }}
          className=" z-[999999]  h-screen flex gap-5 flex-col items-center  justify-center  text-dark_pastel_green-100  "
        >
          <fieldset className=" sm:grid sm:grid-cols-signup_layout flex flex-col rounded-md shadow-space_cadet-900 shadow-lg bg-anti-flash_white-400 sm:h-[60%] sm:w-[700px] items-center w-full h-full ">
            <div className="sm:h-full sm:w-full sm:flex sm:flex-col hidden bg-space_cadet-600 sm:justify-center sm:border sm:border-anti-flash_white-100 pt-20 ">
              <div className="text-center text-anti-flash_white-800 font-bold">
                <h1 className="text-2xl"> Sign Up</h1>
                <span className="text-sm">Try our new chatbot</span>
              </div>
              <picture className="sm:w-full sm:h-full h-full flex justify-center">
                <TbMessageChatbot
                  size={"60%"}
                  className="text-anti-flash_white-900"
                />
              </picture>
            </div>
            <div className="flex flex-col p-4 gap-4 pl-10 pr-10 bg-anti-flash_white-500  h-full w-full justify-center">
              <label
                className="text-black md:text-sm  text-lg uppercase"
                htmlFor="username"
              >
                Username
              </label>
              <InputField
                nameProp="username"
                idProp="username"
                type="text"
                className=" p-1.5 outline-none text-anti-flash_white-100 "
              />
              <label
                className="text-black md:text-sm text-start text-lg uppercase"
                htmlFor="email"
              >
                Email
              </label>
              <InputField
                nameProp="email"
                type="email"
                className=" p-1.5 outline-none text-anti-flash_white-100 "
                idProp="email"
              />
              <label
                className="text-black md:text-sm text-start text-lg uppercase"
                htmlFor="password"
              >
                Password
              </label>
              <InputField
                nameProp="password"
                type="password"
                className=" p-1.5 outline-none text-anti-flash_white-100 "
                idProp="password"
              />
              <label
                className="text-black text-start md:text-sm text-lg uppercase"
                htmlFor="repeatedPassword"
              >
                Repeat Password
              </label>
              <InputField
                nameProp="repeatedPassword"
                type="password"
                className="p-1.5 outline-none"
                idProp="repeatedPassword"
              />
              <Checkbox isCheckedProp={false} />
              <SubmitButton
                hoverColor="dark_pastel_green"
                className="bg-space_cadet text-lg text-anti-flash_white-900 p-2.5 w-[220px] sm:w-auto"
                value="SignUp"
              />
            </div>
          </fieldset>
        </form>
      </RootLayout>
    </>
  );
}
