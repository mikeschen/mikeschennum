"use client";

import { useChat } from "ai/react";
import Image from "next/image";
import authorPortrait from "../public/images/hero-main.jpg";
import { useEffect } from "react";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		initialInput: "Tell me about Michael Schennum",
	});

	// useEffect(() => {

	// });

	return (
		<div className="flex">
			<div className="w-1/2 p-6">
				<Image src={authorPortrait} alt="Author at work on his laptop"></Image>
			</div>
			<div className="w-1/2 pr-4">
				<div className="relative min-h-screen flex flex-col items-center">
					{/* Input form at the top */}
					<div className="w-full max-w-md mt-4 px-4 sticky top-0 bg-white z-10">
						<form onSubmit={handleSubmit} className="w-full">
							<input
								className="w-full p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								value={input}
								placeholder="Say something..."
								onChange={handleInputChange}
							/>
						</form>
					</div>

					{/* Messages container */}
					<div className="w-full max-w-md flex-grow overflow-y-auto px-4 py-8 space-y-4">
						{messages.map((m) => (
							<div
								key={m.id}
								className={`whitespace-pre-wrap p-3 rounded-lg ${
									m.role === "user"
										? "bg-blue-100 text-blue-800"
										: "bg-gray-100 text-gray-800"
								}`}
							>
								<span className="font-bold">
									{m.role === "user" ? "User: " : "AI: "}
								</span>
								{m.content}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
