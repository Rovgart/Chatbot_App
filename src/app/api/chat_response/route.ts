import { main } from "@/app/lib/lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json(
        { message: "Input field is empty" },
        { status: 400 }
      );
    }
    const chatResponse = await main(message);
    if (chatResponse) {
      return NextResponse.json({ message: chatResponse }, { status: 200 });
    }
  }
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
