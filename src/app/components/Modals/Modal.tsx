"use client";
import React, { ReactNode, ReactDOM } from "react";
type Props = {};

function Backdrop() {
  return (
    <div className="bg-dark_pastel_green-100 bg-opacity-80 w-screen h-screen fixed top-0 "></div>
  );
}
function Content({ children }: { children: ReactNode }) {
  return <div className="p-8 max-w-[700px] h-screen mx-auto">{children}</div>;
}
function Modal({ children }: { children: ReactNode }) {
  return (
    <>
      <Backdrop />
      <Content>{children}</Content>
    </>
  );
}
export default Modal;
