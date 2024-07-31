"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { CiUser } from "react-icons/ci";
type UserProps = {
  username: string;
};

function UserIcon({ username }: UserProps) {
  return (
    <div className="">
      <picture className="sm:size-20 size:10">
        {/* <Suspense fallback>
          <Image src={} />
        </Suspense> */}
        <CiUser />
      </picture>
      <span>{username}</span>
    </div>
  );
}

export default UserIcon;
