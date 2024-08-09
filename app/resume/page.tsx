"use client";

import CustomButton from "../components/Button";

const ResumePage = () => {
	const downloadResume = () => {};

	return (
		<div className="bg-gray-100 font-sans">
			<div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
				<CustomButton
					label="Download Resume"
					handleClick={downloadResume}
				></CustomButton>
				<div className="bg-white shadow-md rounded-lg p-8">
					<h1 className="text-3xl font-bold text-gray-800 mb-4">SKILLS</h1>
					<p className="text-gray-700 mb-8">
						Mike Schennum is a Software Engineer experienced in spearheading the
						development of large-scale software solutions and deploying
						intuitive solutions to meet client design requirements. Michael has
						a proven track record of driving customer satisfaction and is
						skilled in providing technical leadership, resulting in code
						quality, system reliability, and team productivity.
					</p>
					<h1 className="text-3xl font-bold text-gray-800 mb-4">EXPERIENCE</h1>
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-2">
							Nelnet, Remote — Tech Lead
						</h2>
						<p className="text-gray-500 text-sm mb-2">June 2021 - July 2024</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>
								Promoted from Senior Software Engineer to Tech Lead in 2023.
							</li>
							<li>
								Primarily Front-end engineer before moving to Full Stack
								(Vue/Laravel).
							</li>
							<li>
								Plan, architect, and write documentation/tickets for epics,
								roadmap, tech debt, and testing.
							</li>
							<li>Spearhead app migration from Vue 2 to Vue 3.</li>
							<li>Lead the Nelnet Philippines front-end engineering team.</li>
							<li>
								Implement solutions with concise, efficient, testable code using
								Vue, TypeScript, SCSS, PHP, Laravel, Webpack, Knockout.js, and
								Mocha/Chai test framework.
							</li>
							<li>
								Write unit, acceptance, visual regression, and end-to-end tests
								(both PHP and JS) when contributing code.
							</li>
						</ul>
					</div>
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-2">
							STS Cymetryc, Remote — Lead Front-End Developer
						</h2>
						<p className="text-gray-500 text-sm mb-2">March 2020 - June 2021</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>
								Architect and build an enterprise-level healthcare portal app
								with Vue, Vuex, Vuetify, Vue Test Utils, and plain JavaScript.
							</li>
							<li>
								Work closely with CEO and .NET engineers to design and launch
								greenfield app.
							</li>
						</ul>
					</div>
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-2">
							Modern Climate, Remote — Full Stack Developer
						</h2>
						<p className="text-gray-500 text-sm mb-2">
							March 2018 - January 2020
						</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>
								Use React.js, Redux, Ruby on Rails, and PostgreSQL on a team of
								software engineers to develop enterprise apps.
							</li>
							<li>
								Created church management mobile app with React Native and
								Typescript.
							</li>
							<li>
								Promoted from Front-end Developer to Full-stack Developer II.
							</li>
						</ul>
					</div>
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-2">
							Prism Studios, Chandler, AZ — Front-End Developer
						</h2>
						<p className="text-gray-500 text-sm mb-2">
							March 2017 - January 2018
						</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>
								Sub-contracted to American Express to work on fintech credit
								score software on an Agile team.
							</li>
							<li>
								AngularJS, Angular, and React JavaScript developer for
								enterprise-level web and mobile applications.
							</li>
						</ul>
					</div>
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-2">
							Woz-U, Scottsdale, AZ — Coding Teacher Assistant
						</h2>
						<p className="text-gray-500 text-sm mb-2">
							September 2016 - March 2017
						</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li>
								Taught students Javascript, React, Node.js, HTML, CSS,
								Bootstrap, Typescript, .NET, and C#.
							</li>
							<li>
								Prepared students for technical interviews and provided a
								thorough understanding of software development fundamentals.
							</li>
						</ul>
					</div>
					<h1 className="text-3xl font-bold text-gray-800 mb-4">EDUCATION</h1>
					<div className="mb-8">
						<p className="text-gray-800 mb-2">
							University of California, Santa Cruz, CA — Bachelor of Arts
						</p>
					</div>
					<div className="mb-8">
						<p className="text-gray-800 mb-2">
							Epicodus, Portland, OR — Full Stack Software Engineering
						</p>
					</div>
					<h1 className="text-3xl font-bold text-gray-800 mb-4">PROJECTS</h1>
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-2">
							Hangboard Repeaters - Rock Climbing Training App
						</h2>
						<p className="text-gray-700 mb-2">
							Top five highest rated (over four stars) and most downloaded (over
							50,000 downloads) rock climbing training apps on the Google Play
							Store.
							<a
								href="https://github.com/mikeschen/HangBoardRepeatersAndroid"
								className="text-blue-500 hover:underline"
							>
								https://github.com/mikeschen/HangBoardRepeatersAndroid
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumePage;
