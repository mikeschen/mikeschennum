import { Message } from "ai";

const MessageList = ({ messages }: { messages: Message[] }) => {
	return (
		<div className="w-full max-w-md flex-grow overflow-y-auto py-8 space-y-4">
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
						{m.role === "user" ? "👨‍💻: " : "🤖: "}
					</span>
					{m.content}
				</div>
			))}
		</div>
	);
};

export default MessageList;
