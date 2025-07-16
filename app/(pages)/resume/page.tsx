"use client";

import BaseButton from "../../components/BaseButton";

const ResumePage = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-950 font-sans container mx-auto my-8 px-4 sm:px-6 lg:px-8">
			<div className="flex justify-center py-4">
				<a href="/docs/schennum-resume.pdf" download="schennum-resume.pdf">
					<BaseButton label="Download Resume"></BaseButton>
				</a>
			</div>
			<div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
				{/* Header Section */}
				<div className="text-center mb-8 border-b pb-6">
					<h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Michael Schennum</h1>
					<div className="text-gray-600 dark:text-gray-300 space-y-1">
						<p>602.540.8776 | mikeschenphoto@gmail.com | Phoenix, AZ</p>
						<div className="flex justify-center space-x-4 text-sm">
							<a href="https://www.linkedin.com/in/mikeschen" className="text-blue-600 hover:underline">LinkedIn</a>
							<a href="https://www.github.com/mikeschen" className="text-blue-600 hover:underline">GitHub</a>
							<a href="https://www.mikeschen.com" className="text-blue-600 hover:underline">Portfolio</a>
						</div>
					</div>
				</div>

				{/* Summary Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">SUMMARY</h2>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
						Senior full-stack software developer with a strong track record across multiple industries and tech stacks.
						Proven leadership in full-stack roles and as a front-end tech lead, driving initiatives like increasing unit test coverage,
						reducing technical debt, leading design system overhauls, and improving security. Experienced in mentoring developers,
						conducting code reviews, collaborating with stakeholders, and delivering scalable, production ready solutions.
					</p>
				</div>
				{/* Experience Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">EXPERIENCE</h2>

					<div className="mb-8">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							Empower Community Care — Full-stack Software Developer and Consultant
						</h3>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">March 2025 - Present</p>
						<p className="text-gray-700 dark:text-gray-300 mb-2">empowercommunitycare.com</p>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
							<li>
								Contractor and consultant developing single-page applications using React, Vue, and Firebase backend for Empower Community Care, a global health leader delivering evidence-based programs and technology solutions.
							</li>
						</ul>
					</div>

					<div className="mb-8">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							Nelnet Community Engagement — Front-End Tech Lead / Senior Software Engineer
						</h3>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">June 2021 - July 2024</p>
						<p className="text-gray-700 dark:text-gray-300 mb-2">nelnet.com</p>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
							<li>
								Promoted to Tech Lead role from Senior Software Engineer (Vue/Laravel).
							</li>
							<li>
								Plan, architect and write documentation/tickets for epics, roadmap, tech debt and testing.
							</li>
							<li>
								Led initiatives to migrate from Vue 2 to Vue 3, streamline CSS design system, fix front-end security vulnerabilities and increase unit test coverage to 50% or more.
							</li>
							<li>
								Review and take on back-end tickets (Laravel/PHP/MySQL) when needed.
							</li>
							<li>
								Helped oversee onshore, offshore and contract front-end teams, as well as pair-program and mentor junior and mid-level developers.
							</li>
							<li>
								Deploy and monitor code with Docker, AWS ECS and GitHub CI/CD.
							</li>
						</ul>
					</div>
					<div className="mb-8">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							STS Cymetryc — Lead Front-End Developer
						</h3>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">March 2020 - June 2021</p>
						<p className="text-gray-700 dark:text-gray-300 mb-2">cymetryc.com</p>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
							<li>
								Designed and launched a greenfield enterprise healthcare portal using Vue 3, Vuex, and Vuetify, collaborating closely with backend engineers and stakeholders.
							</li>
							<li>
								Built component architecture, testing suite (Vue Test Utils), and UI system.
							</li>
							<li>
								Integrated with existing RESTful APIs built in .NET/C#.
							</li>
						</ul>
					</div>

					<div className="mb-8">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							Modern Climate — Full-stack Developer II
						</h3>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">March 2018 - January 2020</p>
						<p className="text-gray-700 dark:text-gray-300 mb-2">modernclimate.com</p>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
							<li>
								Promoted from Front-end Developer to Full-stack Developer II.
							</li>
							<li>
								Built enterprise web apps using React, Redux, Ruby on Rails, and PostgreSQL.
							</li>
							<li>
								Created mobile apps with React Native and Typescript.
							</li>
						</ul>
					</div>

					<div className="mb-8">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							Prism Studios / American Express — Software Developer
						</h3>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">March 2017 - January 2018</p>
						<p className="text-gray-700 dark:text-gray-300 mb-2">americanexpress.com</p>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
							<li>
								Subcontracted to American Express to work on fintech credit score software on an Agile team.
							</li>
							<li>
								AngularJS, Angular and React developer for enterprise-level applications.
							</li>
						</ul>
					</div>

					<div className="mb-8">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							Woz-U — Coding Instructor
						</h3>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">September 2016 - March 2017</p>
						<p className="text-gray-700 dark:text-gray-300 mb-2">woz-u.com</p>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
							<li>
								Taught JavaScript, React, Node.js, HTML, CSS, Bootstrap, Typescript, .NET and C#.
							</li>
						</ul>
					</div>
				</div>
				{/* Education Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">EDUCATION</h2>

					<div className="mb-6">
						<h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
							Epicodus, Portland, OR
						</h3>
						<p className="text-gray-700 dark:text-gray-300">
							Graduated six-month coding bootcamp in 2016 studying React, Ruby on Rails, Java, Android, SQL, Javascript, HTML and CSS.
						</p>
					</div>

					<div className="mb-6">
						<h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
							University of California, Santa Cruz, CA
						</h3>
						<p className="text-gray-700 dark:text-gray-300">
							Bachelor of Arts, Major in Art.
						</p>
					</div>
				</div>

				{/* Personal Projects Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">PERSONAL PROJECTS</h2>

					<div className="mb-6">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							Hangboard Repeaters - Rock Climbing Training Android App
						</h3>
						<p className="text-gray-700 dark:text-gray-300 mb-2">
							Creator of a top-rated Android rock climbing training app with over 54,000 downloads and 4+ star rating. Built with Java, Kotlin, and SQLite.
						</p>
						<a
							href="https://play.google.com/store/apps/details?id=com.mikeschen.www.hangboardrepeaters"
							className="text-blue-600 hover:underline text-sm"
							target="_blank"
							rel="noopener noreferrer"
						>
							View on Google Play Store
						</a>
					</div>

					<div className="mb-6">
						<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
							Open Beta - Rock Climbing Guidebook Web App
						</h3>
						<p className="text-gray-700 dark:text-gray-300 mb-2">
							Maintainer for OpenBeta (openbeta.io), an open-source web/mobile app for discovering and planning rock climbing routes worldwide. Built with React, Next.js, Tailwind, TypeScript, GraphQL, Node.js, and MongoDB.
						</p>
						<a
							href="https://openbeta.io"
							className="text-blue-600 hover:underline text-sm"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit OpenBeta
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumePage;
