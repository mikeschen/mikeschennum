"use client";

import { useChat } from "ai/react";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		maxToolRoundtrips: 3,
		async onToolCall({ toolCall }) {
			console.log("calling tool 🤖", toolCall);
		},
	});

	// useLayoutEffect(() => {
	// 	const isAuth = false;
	// 	if (!isAuth) {
	// 		redirect("/");
	// 	}
	// }, []);

	return (
		<div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
			<div className="space-y-4">
				{messages.map((m) => (
					<div key={m.id} className="whitespace-pre-wrap">
						<div>
							<div className="font-bold">{m.role}</div>
							<p>
								{m.content.length > 0 ? (
									m.content
								) : (
									<span className="italic font-light">
										{"calling tool: " + m?.toolInvocations?.[0].toolName}
									</span>
								)}
							</p>
						</div>
					</div>
				))}
			</div>

			<form onSubmit={handleSubmit}>
				<input
					className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
					value={input}
					placeholder="Say something..."
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
}
