import { login } from "@/app/lib/lib";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { message: "Method not allowed" },
        { status: 405 }
      );
    }

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Please insert email or password" },
        { status: 400 }
      );
    }
    const user = {
      email: email,
      password: password,
    };

    const loggedUser = await login(user);
    console.log(loggedUser);
    if (loggedUser === null) {
      return NextResponse.json(
        {
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }
    return NextResponse.json(
      {
        message: "Logged in successfully",
        token: loggedUser?.access_token,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Failed to login: POST/api/login ${error?.message} `);
    return NextResponse.json(
      {
        message: `Error in POST/api/login ${error?.message}`,
      },
      { status: 500 }
    );
  }
};
