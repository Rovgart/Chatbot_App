import { url } from "inspector";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { decryptJWT } from "./src/app/lib/lib";
import { useAuth } from "./src/app/store/Auth/AuthProvider";

export default async function middleware(req: NextRequest) {
  // 1. Check if route is protected
  const protectedRoutes = ["/Chatbot"];
  const currentPath = req.nextUrl.pathname;
  const protectedRoute = protectedRoutes.includes(currentPath);
  const token = useAuth();
  if (protectedRoute) {
    // 2. Check for valid session
    const cookie = cookies().get("session")?.value;
    const session = await decryptJWT(cookie as string);
    if (token && req.nextUrl.pathname.startsWith("/chatbot")) {
      return Response.redirect(new URL("/chatbot", req.url));
    }
    if (token && req.nextUrl.pathname.startsWith("/dashboard")) {
      return Response.redirect(new URL("/dashboard", req.url));
    }
    if (!token && !session) {
      return Response.redirect(new URL("/login", req.url));
    }
  }
  const cookies = req.cookies.get("token");
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
