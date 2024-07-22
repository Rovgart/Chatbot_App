import { login } from "@/app/lib/lib";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const formData = req.body;
  const isLogged = await login(req.body);
};
