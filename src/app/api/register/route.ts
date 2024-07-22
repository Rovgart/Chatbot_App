import { NextRequest, NextResponse } from "next/server";
import { connect, registerUserToDb } from "../../lib/lib";

(async () => {
  connect();
})();

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, password } = req.body;
  const registeredUser = await registerUserToDb(req.body);
  if (!email || !password) {
    return NextResponse.json(
      {
        message: "Missing email or password",
      },
      { status: 400 }
    );
  }
  if (registeredUser) {
    return NextResponse.json(
      {
        message: "Successfully registered",
      },
      { status: 200 }
    );
  }
};
