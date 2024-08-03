import Groq from "groq-sdk";
import { SignUpResult } from "../../types/types";

type Props = {};
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});
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
      return null;
    }
    const session = await response.json();
    console.log(session);
    if (session) {
      return { access_token: session.token };
    }
    return false;
  } catch (error: any) {
    console.error(error?.message);
  }
};
export async function createUser(prevState: any, formData: FormData) {}

export async function loginUser(data: { email: string; password: string }) {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to login: ${response.status}:${response.statusText}`
      );
    }
    const session = await response.json();
    if (session) {
      return session;
    }
  } catch (error: any) {
    console.error(error?.message);
  }
}

export const getUserImage = async (user_id: number) => {
  try {
    const response = await fetch(`https://localhost:3000/api/user/${user_id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data", error?.message);
    }
    const data = await response.json();
    if (data) {
      return data.image;
    }
  } catch (error: any) {
    console.error("Failed fetching image", error.message);
  }
};
export const getUserData = async (userId: string) => {
  try {
    const response = await fetch("https://localhost:3000/api/get_user");
    if (!response.ok) {
      throw new Error(
        `Failed fetching data: ${response.status}: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching current user data:", error?.message);
  }
};
export const getChatbotResponse = async (message: string) => {
  const url = "http://localhost:3000/api/chat_response";
  try {
    const response = await fetch(url, {
      body: JSON.stringify({
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(
        `Error occured while getting chat result: ${response.status}:${response.statusText}`
      );
    }
    const chatResponse = await response.json();
    console.log(chatResponse);
    return chatResponse;
  } catch (error: any) {
    console.error("Error fetching current user data:", error?.message);
  }
};
export async function fetchLogin(userData: {
  email: string;
  password: string;
}) {
  const user = {
    email: userData.email,
    password: userData.password,
  };
  console.log(user);
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to login: ${response.status}:${response.statusText}`
      );
    }
    const session = await response.json();
    console.log(session);
    if (session) {
      return session;
    }
  } catch (error: any) {
    console.error(error?.message);
  }
}
