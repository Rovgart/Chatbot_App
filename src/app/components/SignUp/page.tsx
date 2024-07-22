import React from "react";

type Props = {};

function Page({}: Props) {
  return (
    <form
      action={() => {
        // Adding user to DB, checking credentials on server side to secure credentials
      }}
    >
      <h1 className="text-white"> No ja nsi wiem</h1>
    </form>
  );
}

export default Page;
