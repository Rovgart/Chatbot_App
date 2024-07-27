import { url } from "inspector";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { decryptJWT } from "./lib/lib";

export default async function middleware(req: NextRequest) {
  // 1. Check if route is protected
  const protectedRoutes = ["/Chatbot"];
  const currentPath = req.nextUrl.pathname;
  const protectedRoute = protectedRoutes.includes(currentPath);

  if (protectedRoute) {
    // 2. Check for valid session
    const cookie = cookies().get("session")?.value;
    const session = await decryptJWT(cookie as string);
    //   3. Redirect unauthed users

    if (!session.email) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
