import React from "react";

type Props = {};

function LearnMore({}: Props) {
  return (
    <>
      <button
        className=" hover:bg-space_cadet-100  bg-space_cadet-200 w-1/4 p-2 self-center sm:self-center p-1 rounded-md text-anti-flash_white-500"
        type="submit"
      >
        Learn More
      </button>
    </>
  );
}

export default LearnMore;
