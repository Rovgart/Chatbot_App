import React from "react";

type Props = {};

function LearnMore({}: Props) {
  return (
    <>
      <button
        className=" hover:bg-space_cadet-100  bg-space_cadet-800 w-2/3 sm:w-1/2 p-2.5 self-center sm:self-center  rounded-md text-anti-flash_white-500"
        type="submit"
      >
        Learn More
      </button>
    </>
  );
}

export default LearnMore;
