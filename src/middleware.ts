import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export default async function middleware(req: NextRequest) {
  // Define protected routes
  const protectedRoutes = ["/Chatbot", "/Dashboard"];
  const currentPath = req.nextUrl.pathname;

  // Check if the current path is a protected route
  const protectedRoute = protectedRoutes.includes(currentPath);

  if (protectedRoute) {
    // Attempt to get the authentication token
    const token = req.cookies.get("token");
    console.log(`Token for ${currentPath}:`, token?.value);

    // Check if the token is valid and process the logic accordingly
    if (!token) {
      console.log("No token found, redirecting to /login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Add additional token validation logic here, if needed
    // For example, decrypt and validate the token, etc.

    // If the token is valid, allow access to the protected route
    console.log("Successfully authenticated, proceeding to", currentPath);
    return NextResponse.next(); // Proceed to the requested route
  }

  // For non-protected routes, continue as normal
  return NextResponse.next();
}

export const config = {
  matcher: ["/Chatbot", "/Dashboard", "/"],
};
