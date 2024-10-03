import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnAdmin = nextUrl.pathname.startsWith("/admin");
			console.log("isLoggedIn 🚪", isLoggedIn);
			// if (isOnAdmin) {
			// 	if (isLoggedIn) return true;
			// 	return false; // Redirect unauthenticated users to login page
			// } else if (isLoggedIn) {
			// 	return Response.redirect(new URL("/admin", nextUrl));
			// }
			return true;
		},
		async session({ session, token, user }) {
			console.log("session 🔋", session);
			console.log("token 🔑", token);
			console.log("user 👤", user);

			return session;
		},
	},
	providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
