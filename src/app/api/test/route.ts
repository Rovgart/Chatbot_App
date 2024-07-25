import { connect } from "@/app/lib/lib";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const 
  console.log("Is that works ? " + req.method);
  return NextResponse.json({ message: "Testing API" }, { status: 200 });
};
