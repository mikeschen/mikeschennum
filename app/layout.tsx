import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import "./styles/globals.scss";
import Navbar from "./components/Navbar";
import headerLogo from "../public/images/header-logo-mike.png";

export const metadata: Metadata = {
	title: "Michael Schennum - Developer",
	description: "Portfolio of Michael Schennum",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="flex items-center justify-center">
					<h1>
						<Image src={headerLogo} width={240} alt="Mike Logo"></Image>
					</h1>
				</header>
				<Navbar></Navbar>
				<main>{children}</main>
			</body>
		</html>
	);
}
