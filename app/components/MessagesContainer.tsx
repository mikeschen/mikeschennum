import { Message } from "ai";
import { useRef, useEffect } from "react";

const MessageList = ({ messages }: { messages: Message[] }) => {
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const initialMessages = 2;

		if (messagesEndRef.current && messages.length > initialMessages) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	const renderMessage = (m: Message, index: Number) => {
		if (m.content.length === 0 && index === messages.length - 1) {
			return (
				<div key={m.id} className="text-gray-700 p-1">
					Typing...
				</div>
			);
		}

		if (m.content.length > 0) {
			return (
				<div
					key={m.id}
					className={`whitespace-pre-wrap p-3 rounded-lg ${
						m.role === "user"
							? "bg-blue-100 text-blue-800"
							: "bg-gray-100 text-gray-800"
					}`}
				>
					<span className="font-bold">
						{m.role === "user" ? "User 👨‍💻: " : "AI RAG Bot 🤖: "}
					</span>
					{m.content}
				</div>
			);
		}

		return null;
	};

	return (
		<div className="w-full max-w-md flex-grow overflow-y-auto pt-8 space-y-4">
			{messages.map((m, index) => (
				<div key={m.id}>{renderMessage(m, index)}</div>
			))}
			<div ref={messagesEndRef} />
		</div>
	);
};

export default MessageList;
