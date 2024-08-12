"use client";

import { useChat } from "ai/react";
import Image from "next/image";
import authorPortrait from "../public/images/hero-main.jpg";
import MessagesContainer from "./components/MessagesContainer";
import { ABOUT } from "./data/about";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		initialMessages: [
			{ id: "1", role: "user", content: "Tell me about Mike Schennum" },
			{
				id: "2",
				role: "assistant",
				content: ABOUT,
			},
		],
	});

	console.log("🤖", messages);

	return (
		<div className="flex">
			<div className="w-1/2 pt-2">
				<div className="relative min-h-screen grid justify-items-end">
					<Image
						src={authorPortrait}
						alt="Author at work on his laptop"
						height={400}
					></Image>
				</div>
			</div>
			<div className="w-1/2">
				<div className="relative min-h-screen flex flex-col items-center">
					{/* Input form at the top */}
					<div className="w-full max-w-md mt-4 sticky top-0 bg-white z-10">
						<form onSubmit={handleSubmit} className="w-full">
							<input
								autoFocus
								className="w-full p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								value={input}
								placeholder="Ask me any questions about Mike..."
								onChange={handleInputChange}
							/>
						</form>
					</div>
					<MessagesContainer messages={messages}></MessagesContainer>
				</div>
			</div>
		</div>
	);
}
