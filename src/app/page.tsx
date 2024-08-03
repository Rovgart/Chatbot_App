import { Oswald } from "next/font/google";
import { RiRobot2Fill } from "react-icons/ri";
import LearnMore from "./components/Buttons/LearnMoreButton";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-landing_layout items-center pt-28 gap-minGap pr-2  h-[100vh]">
        <div className="order-2 h-96 bg-space_cadet-600 shadow-space_cadet-900 shadow-lg  rounded-lg xl:col-[2/3] lg:row-[1/-1] sm:col-[1/-1] col-[1/-1] sm:order-1 sm:text-start text-center flex flex-col justify-around  ">
          <h1
            className={`text-anti-flash_white sm:text-4xl text-center  ${oswald.className} text-2xl md:pl-4`}
          >
            Chat Smarter, Connect Faster.
          </h1>
          <span className="text-anti-flash_white-400 text-center pl-3 text-opacity-80 tracking-wide text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            illum ducimus dignissimos similique dolores.
          </span>
          <LearnMore />
        </div>
        <picture className="size-64 md:size-96  border-dark_pastel_green-800  self-center  lg:col-[1/-1] xl:col-[3/4] col-[1/-1] border justify-self-center ">
          <RiRobot2Fill className="text-anti-flash_white w-full h-full object-cover sm:order-2 order-1 " />
        </picture>
      </main>
      <h1 className="text-6xl col-[1/-1] text-white font-bold text-center">
        What can you do with DialogueFlow ?
      </h1>
      <main className="grid grid-flow-col text-anti-flash_white-900 text-center  font-bold h-screen">
        <Card />
      </main>
    </>
  );
}
