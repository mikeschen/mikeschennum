"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleDarkMode from "./ToggleDarkMode";

const Navbar = () => {
	const pathname = usePathname();

	const getActiveClass = (path: string) => {
		return path === pathname ? "text-green-100 bg-green-600" : "text-green-500";
	};

	return (
		<nav className="p-4 border-t border-b dark:bg-gray-950">
			<div className="container mx-auto flex justify-between items-center">
				<ul className="flex space-x-4 justify-evenly w-full">
					<li>
						<Link
							href="/"
							className={`rounded-md px-3 py-2 text-md font-medium hover:bg-green-700 hover:text-green-100 ${getActiveClass(
								"/"
							)}`}
						>
							Home
						</Link>
					</li>
					<li>
						<a
							href="https://play.google.com/store/apps/details?id=com.mikeschen.www.hangboardrepeaters"
							className="rounded-md px-3 py-2 text-md font-medium text-green-500 hover:bg-green-700 hover:text-green-100"
							target="_blank"
							rel="noopener noreferrer"
						>
							Personal Project: Android App
						</a>
					</li>
					<li>
						<a
							href="https://github.com/mikeschen"
							className="rounded-md px-3 py-2 text-md font-medium text-green-500 hover:bg-green-700 hover:text-green-100"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
					</li>
					<li>
						<Link
							href="/resume"
							className={`rounded-md px-3 py-2 text-md font-medium hover:bg-green-700 hover:text-green-100 ${getActiveClass(
								"/resume"
							)}`}
						>
							Resume
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className={`rounded-md px-3 py-2 text-md font-medium hover:bg-green-700 hover:text-green-100 ${getActiveClass(
								"/contact"
							)}`}
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							href="/admin"
							className={`rounded-md px-3 py-2 text-md font-medium hover:bg-green-700 hover:text-green-100 ${getActiveClass(
								"/admin"
							)}`}
						>
							Admin
						</Link>
					</li>
					<li>
						<ToggleDarkMode />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
