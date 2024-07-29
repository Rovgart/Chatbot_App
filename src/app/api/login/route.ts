import { login } from "@/app/lib/lib";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest, res: NextResponse) => {
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
  if (loggedUser) {
    return NextResponse.json(
      {
        message: "Logged in successfully",
      },
      { status: 200 }
    );
  }
};
