import React from "react";

type Props = {};

function LearnMore({}: Props) {
  return (
    <>
      <button
        className=" hover:bg-celestial_blue-300  bg-celestial_blue w-1/2 self-start sm:self-center p-1 rounded-md text-anti-flash_white-500"
        type="submit"
      >
        Learn More
      </button>
    </>
  );
}

export default LearnMore;
