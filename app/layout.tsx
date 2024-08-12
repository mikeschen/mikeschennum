import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import "./styles/globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import headerLogo from "../public/images/header-logo-mike.png";

export const metadata: Metadata = {
	title: "Michael Schennum - Developer",
	description: "Michael Schennum Full Stack Developer and Software Engineer",
	icons: {
		icon: "/icon.ico",
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
				<header className="flex items-center justify-center">
					<h1>
						<Link href={"/"}>
							<Image src={headerLogo} width={240} alt="Mike Logo"></Image>
						</Link>
					</h1>
				</header>
				<Navbar></Navbar>
				<main>{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
