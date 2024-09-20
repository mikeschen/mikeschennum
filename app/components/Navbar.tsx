import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<ul className="flex space-x-4 justify-evenly w-full">
					<li>
						<Link
							href="/"
							className="rounded-md px-3 py-2 text-md font-medium text-green-500 hover:bg-green-600 hover:text-green-100"
						>
							Home
						</Link>
					</li>
					{/* <li>
						<Link
							href="https://scharts.vercel.app/"
							className="rounded-md px-3 py-2 text-md font-medium text-green-500 hover:bg-green-600 hover:text-green-100"
						>
							Personal Project: Strava Charts
						</Link>
					</li> */}
					<li>
						<Link
							href="/resume"
							className="rounded-md px-3 py-2 text-md font-medium text-green-500 hover:bg-green-600 hover:text-green-100"
						>
							Resume
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="rounded-md px-3 py-2 text-md font-medium text-green-500 hover:bg-green-600 hover:text-green-100"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
