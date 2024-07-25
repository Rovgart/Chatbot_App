import { Session } from "inspector";
import { redirect } from "next/navigation";
import React from "react";
import { SignUpResult, User } from "../../types/types";

type Props = {};

export async function fetchAIResponse(message: string) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer your_api_key", // replace with your actual API key
    },
    body: JSON.stringify({
      message: message,
    }),
  };
  try {
    const response = await fetch("/someAIEndpoint", options);
    if (!response.ok) {
      throw new Error(
        `Something went wrong, ${response.status}: ${response.statusText}`
      );
    }
  } catch (error: any) {
    console.error(error?.message || "");
  }
}
export const signUpUser = async (credentials): SignUpResult => {
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
        repeatedPassword: credentials.repeatedPassword,
        agreeTerms: credentials.agreeTerms,
      }),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to register user: ${response.status}:${response.statusText}`
      );
    }
    const session = await response.json();
    if (!session) {
      return null;
    }
    console.log(session);
    return true;
  } catch (error: any) {
    console.error(error?.message);
  }
};
export async function createUser(prevState: any, formData: FormData) {}
