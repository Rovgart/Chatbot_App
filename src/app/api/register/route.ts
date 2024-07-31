import { createSession } from "@/app/session";
import { sign } from "crypto";
import { EncryptJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { connect, encryptJWT, registerUserToDb } from "../../lib/lib";

(async () => {
  connect();
})();

export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const { username, email, password, repeatedPassword, agreeTerms } =
      await req.json();
    console.log(email);
    const user = {
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password: password,
      repeatedPassword: repeatedPassword,
      agreeTerms: agreeTerms,
    };
    console.log(user);
    const registeredUser = await registerUserToDb(user);
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Missing email or password",
        },
        { status: 400 }
      );
    }
    if (registeredUser) {
      const session = await createSession(email);
      console.log(session);
      if (session) {
        return NextResponse.json(
          {
            message: "Successfully registered",
            token: session,
          },
          { status: 200 }
        );
      }
    }
  } catch (error: any) {
    console.error("Error in POST/api/register", error?.message);
    return NextResponse.json(
      { message: `Error in POST:api/register: ${error?.message} ` },
      { status: 500 }
    );
  }
};
