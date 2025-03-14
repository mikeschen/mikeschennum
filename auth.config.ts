import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
		signOut: "/admin",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isAdminRoute = nextUrl.pathname.startsWith("/admin");

			if (isAdminRoute && !isLoggedIn) {
				return false; // Redirect to login page if user is not authenticated
			}

			return true;
		},
		async signIn({ user, account, profile }) {
			return true; // Return true to proceed with login
		},
		async redirect({ url, baseUrl }) {
			// Redirect to /admin after login
			return baseUrl + "/admin";
		},
	},
	providers: [],
} satisfies NextAuthConfig;
