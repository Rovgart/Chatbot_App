import { login } from "@/app/lib/lib";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, password } = req.json();

  if (!email || !password)
    throw new Error("Please enter a valid email or password");
  const isLogged = await login(req.body);
};
