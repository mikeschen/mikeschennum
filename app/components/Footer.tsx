import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white text-gray-800 py-6">
			<div className="container mx-auto text-center">
				<div className="mb-2 text-gray-600 text-xs">
					Built with Next.js, Tailwind CSS, and Vercel AI SDK.
				</div>
				<div className="text-gray-600 text-xs">
					&copy; {new Date().getFullYear()} Michael Schennum. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
