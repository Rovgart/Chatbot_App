import React from "react";

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
const signUpUser= async ()=>{}