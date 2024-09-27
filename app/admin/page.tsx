"use client";

import { useChat } from "ai/react";
import { useLayoutEffect, useContext } from "react";
import { redirect } from "next/navigation";
import AuthContext from "../contexts/AuthContext";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		maxToolRoundtrips: 3,
	});

	const { isAuth } = useContext(AuthContext);

	useLayoutEffect(() => {
		if (!isAuth) {
			redirect("/");
		}
	}, [isAuth]);

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
