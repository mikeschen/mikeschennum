import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
		signOut: "/admin",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnLogin = nextUrl.pathname.startsWith("/login");
			const isOnAdmin = nextUrl.pathname.startsWith("/admin");
			if (isOnAdmin) {
				if (isLoggedIn) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isLoggedIn && isOnLogin) {
				return Response.redirect(new URL("/admin", nextUrl));
			}

			return true;
		},
	},
	providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
