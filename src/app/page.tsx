import { Oswald } from "next/font/google";
import Image from "next/image";
import { RiRobot2Fill } from "react-icons/ri";
import LearnMore from "./components/Buttons/LearnMoreButton";
import Form from "./components/Form/Form";
import GeneratorPage from "./GeneratorPage";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
  return (
    <>
      <main className="grid grid-cols-landing_layout items-center  gap-8 pr-2  h-[92vh]">
        <div className="order-2 h-96 bg-dark_pastel_green-100 sm:col-[2/3] sm:row-[1/-1] col-[1/-1] sm:order-1 sm:text-start text-center flex flex-col justify-around  ">
          <h1
            className={`text-anti-flash_white sm:text-4xl  ${oswald.className} text-2xl`}
          >
            Turn Your Ideas into Beautiful Images Instantly!
          </h1>
          <span className="text-anti-flash_white-400 sm:pl-3 text-opacity-80 tracking-wide text-sm mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            libero itaque ullam modi ex, recusandae nemo a voluptas praesentium
            iure omnis aliquid, hic sint adipisci earum nobis dicta doloremque
            saepe numquam vero asperiores minus dolorum. Modi accusamus quos
            reprehenderit dolorem, ducimus dolore adipisci harum nobis, quis
            magnam aliquid. Soluta aut voluptate a! Laudantium dolorem fuga
            laborum veritatis obcaecati laboriosam rerum, quae perferendis
            itaque et?
          </span>
          <LearnMore />
        </div>
        <picture className=" bg-celestial_blue-300 self-center sm:col-[3/4] col-[1/-1] border-dark_pastel_green-500 border justify-self-center ">
          <RiRobot2Fill
            size={350}
            className="text-anti-flash_white object-cover sm:order-2 order-1 "
          />
        </picture>
      </main>
      <GeneratorPage />
    </>
  );
}
