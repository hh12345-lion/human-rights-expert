import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveSlugRedirect } from "@/lib/seo/slug-redirects";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const redirectPath = resolveSlugRedirect(pathname);
  if (redirectPath) {
    const url = new URL(redirectPath + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
