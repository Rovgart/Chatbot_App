"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  value,
  className,
  hoverColor,
}: {
  value: string;
  className?: string;
  hoverColor?: string;
}) => {
const { pending } = useFormStatus();
  return (
    <button
      className={`${className} p-2 rounded-lg hover:bg-${hoverColor}-100 ${
        pending && "bg-dark_pastel_green-200 opacity-70"
      }`}
      type="submit"
      disabled={pending}
    >
      {pending ? "Sending..." : value}
    </button>
  );
};

export default SubmitButton;
