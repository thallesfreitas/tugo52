import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const publicPages = ["/", "/login"];

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  //This will be used with this integrated to API
  console.log(isPublicPage);
  // if (isPublicPage) {
  return intlMiddleware(req);
  // } else {
  //   // return (authMiddleware as any)(req);
  // }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
