import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "./lib/db";
import { users } from "./lib/db/schema/users";

async function getUser(email: string) {
	// Query the users_table by email
	const user = await db
		.select()
		.from(users)
		.where(eq(users.email, email))
		.limit(1); // Limit to one user, as email is unique

	return user[0] || null; // Return the first result or null if no user found
}

export const { handlers, auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await getUser(email);
					if (!user) return null;

					if (password === user.password) return { ...user, id: user.id.toString() };

					console.log("Invalid credentials ✋");
					return null;
				}

				return null;
			},
		}),
	],
});
