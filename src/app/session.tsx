import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decryptJWT, encryptJWT } from "./lib/lib";

const cookie = {
  name: "chatbot-session",
  expires: 24 * 60 * 60 * 1000, // 30 days
  path: "/",
  options: { httpOnly: true, secure: true },
};

export const createSession = async (email: string) => {
  const expires = new Date(Date.now() + cookie.expires);
  const session = await encryptJWT({ email, expires });
  console.log(session);
  const cookieLog = cookies().set(cookie.name, session, {
    ...cookie.options,
    expires,
  });
  return session;
};

// This function verifies if current user has session
export const verifySession = async () => {
  const receivedCookie = cookies().get(cookie.name)?.value;
  const session = await decryptJWT(receivedCookie as string);
  if (!session) {
    redirect("/login");
  }
  return { email: session.email };
};
export const deleteSession = async () => {
  cookies().delete(cookie.name);
  redirect("/login");
};
