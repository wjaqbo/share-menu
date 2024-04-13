import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("next-url", nextUrl);
      const isLoggedIn = !!auth?.user;
      const isOnSharingPage = nextUrl.pathname.startsWith("/meals");
      console.log("is on page", isOnSharingPage);
      if (isOnSharingPage) {
        console.log("is on sharing page", isOnSharingPage);
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/meals", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
