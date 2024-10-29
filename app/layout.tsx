import type { Metadata } from "next";
import "./globals.css";
import "./styles/globals.scss";
import { ThemeProvider } from "./contexts/ThemeProvider";
import App from "./app";

export const metadata: Metadata = {
	title: "Michael Schennum - Developer",
	description: "Michael Schennum Full Stack Developer and Software Engineer",
	icons: {
		icon: "/icon.ico",
	},
	keywords: [
		"Michael Schennum",
		"Developer",
		"Software Engineer",
		"Full Stack",
		"React",
		"Node",
		"Next.js",
		"Tailwind",
		"TypeScript",
		"JavaScript",
		"Vue",
		"Angular",
		"Svelte",
		"Express",
		"MongoDB",
		"PostgreSQL",
		"MySQL",
		"Docker",
		"AWS",
		"",
		"Azure",
		"CI/CD",
		"",
		"GitHub",
		"GitLab",
		"Bitbucket",
		"Jira",
		"Confluence",
		"Slack",
		"Teams",
		"Zoom",
		"",
		"WebSockets",
		"REST",
		"GraphQL",
		"OpenAPI",
		"",
		"Postman",
		"",
		"VSCode",
		"DBeaver",
		"MongoDB Compass",
		"Docker Compose",
	],
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
