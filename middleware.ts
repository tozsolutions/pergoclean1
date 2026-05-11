import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "./lib/session";
import { cookies } from "next/headers";

// Allowed origins for CSRF protection
const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://www.pergoclean.com.tr",
  "https://pergoclean.com.tr"
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. CSRF Protection for API routes (Origin/Referer checking)
  if (request.method === "POST" && pathname.startsWith("/api/")) {
    const origin = request.headers.get("origin");
    // Allow if no origin (some automated non-browser tools) or if origin is explicitly in our allowed list
    const isVercelPreview = origin && origin.endsWith(".vercel.app");
    
    if (origin && !ALLOWED_ORIGINS.includes(origin) && !isVercelPreview) {
      // Also allow if it matches the current host dynamically
      const host = request.headers.get("host") || "";
      if (!origin.includes(host)) {
        return NextResponse.json({ message: "CSRF verification failed." }, { status: 403 });
      }
    }
  }

  // 2. Admin Portal Protection
  if (pathname.startsWith("/portal") && !pathname.startsWith("/portal/login")) {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    
    if (!session.isAdmin) {
      // Redirect to login
      const url = request.nextUrl.clone();
      url.pathname = "/portal/login";
      return NextResponse.redirect(url);
    }
  }

  // Protect /api/admin/logout or any other secure admin APIs
  if (pathname.startsWith("/api/admin/") && !pathname.startsWith("/api/admin/login")) {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    
    if (!session.isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/portal/:path*",
    "/api/:path*"
  ]
};
