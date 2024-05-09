import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtectedPage = nextUrl.pathname.includes("/admin");
      const isOnLoginPage = nextUrl.pathname.includes("/login");
      if (isOnLoginPage) {
        if (isLoggedIn)
          return Response.redirect(
            nextUrl.searchParams.get("callbackUrl") || new URL("/", nextUrl),
          );
      }
      if (isOnProtectedPage) {
        if (isLoggedIn) return true;
        return false;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
