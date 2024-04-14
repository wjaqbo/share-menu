import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("next-url", nextUrl);
      const isLoggedIn = !!auth?.user;
      const isOnSharingPage = nextUrl.pathname.startsWith("/meals/share");
      if (isOnSharingPage) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        // return Response.redirect(new URL("/meals/share", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
