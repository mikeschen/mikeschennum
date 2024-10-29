"use client";

import { ReactNode, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import headerLogo from "../public/images/header-logo-mike.png";
import headerLogoDark from "../public/images/header-logo-mike-dark.png";
import ThemeContext from "./contexts/ThemeContext";

interface AppProps {
	children: ReactNode;
}

const App = ({ children }: AppProps) => {
	const { darkMode } = useContext(ThemeContext);

	return (
		<>
			<header className="flex items-center justify-center dark:bg-gray-950">
				<h1>
					<Link href={"/"}>
						<Image
							src={darkMode ? headerLogoDark : headerLogo}
							width={240}
							priority
							alt="Mike Logo"
						></Image>
					</Link>
				</h1>
			</header>
			<Navbar></Navbar>
			<main>{children}</main>
			<Footer></Footer>
		</>
	);
};

export default App;
