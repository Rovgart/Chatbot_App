import React from "react";
import { fetchLogin } from "../actions";
import LoginForm from "../components/Form/LoginForm";
import ChatbotIcon from "../../../assets/chatbot.png";
import Image from "next/image";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import Logo from "../../../assets/logo.png";

const Login = () => {
  return (
    <div className="grid grid-cols-login_layout h-screen">
      <div className=" relative w-full h-full bg-space_cadet-700 flex justify-center items-center">
        <div className="absolute top-[150px] right-12 rounded-full bg-space_cadet-900 flex items-center gap-4 p-4">
          <FaCircleArrowLeft />
          <Link href={"/"}>Return to homepage</Link>
        </div>
        <picture className="size-24 left-4 absolute top-[150px]">
          <Image src={Logo} alt="logoIcon" />
        </picture>
        <picture className=" size-96 mb-12 ">
          <Image
            className="object-cover "
            src={ChatbotIcon}
            alt="Chatbot icon"
          />
        </picture>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
