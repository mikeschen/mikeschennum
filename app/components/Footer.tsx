const Footer = () => {
	return (
		<footer className="bg-white text-gray-600 py-6 dark:bg-gray-950 dark:text-gray-400 text-xs">
			<div className="container mx-auto text-center">
				<div className="mb-2">
					Built with React, Next.js, Auth.js, Tailwind CSS, Drizzle, Postgres,
					OpenAI, SendGrid and Vercel AI SDK.
				</div>
				<div>
					&copy; {new Date().getFullYear()} Michael Schennum. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
