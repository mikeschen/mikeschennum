"use client";

import { ABOUT } from "../data/about";
import { useChat } from "ai/react";
import MessagesContainer from "./MessagesContainer";

const MessagesInput = () => {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		initialMessages: [
			{ id: "1", role: "user", content: "Tell me about Mike Schennum" },
			{
				id: "2",
				role: "assistant",
				content: ABOUT,
			},
		],
		onError: (error) => {
			console.error(error);
		},
	});

	return (
		<div className="relative min-h-screen flex flex-col items-center">
			<div className="w-full max-w-md mt-4 sticky top-0 bg-white z-10">
				<form onSubmit={handleSubmit} className="w-full">
					<input
						autoFocus
						className="w-full p-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						value={input}
						placeholder="Ask me any questions about Mike..."
						maxLength={560}
						onChange={handleInputChange}
					/>
				</form>
			</div>
			<MessagesContainer messages={messages}></MessagesContainer>
		</div>
	);
};

export default MessagesInput;
