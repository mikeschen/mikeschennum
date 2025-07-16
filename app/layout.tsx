import type { Metadata } from "next";
import "./globals.css";
import "./styles/globals.scss";
import { ThemeProvider } from "./contexts/ThemeProvider";
import App from "./app";

export const metadata: Metadata = {
	title: "Michael Schennum - Full Stack Developer",
	description: "Michael Schennum is a Full Stack Developer and Software Engineer specializing in React, Next.js, Node.js, and modern web technologies. Ask my AI chatbot anything about my experience!",
	icons: {
		icon: "/icon.ico",
	},
	keywords: [
		"Michael Schennum",
		"Full Stack Developer",
		"Software Engineer",
		"React Developer",
		"Next.js",
		"Node.js",
		"TypeScript",
		"JavaScript",
		"Tailwind CSS",
		"PostgreSQL",
		"Docker",
		"AWS",
		"Azure",
		"CI/CD",
		"REST API",
		"GraphQL",
		"AI Chatbot",
		"RAG",
		"OpenAI"
	],
	openGraph: {
		title: "Michael Schennum - Full Stack Developer",
		description: "Full Stack Developer specializing in React, Next.js, and modern web technologies",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Michael Schennum - Full Stack Developer",
		description: "Full Stack Developer specializing in React, Next.js, and modern web technologies",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<App>{children}</App>
				</ThemeProvider>
			</body>
		</html>
	);
}
