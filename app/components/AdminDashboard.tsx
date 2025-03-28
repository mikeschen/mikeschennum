"use client";

import { useMemo } from "react";
import { useChat } from "ai/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOutSession } from "../../lib/actions/authenticate";

export default function AdminDashboard() {
	const { data: session } = useSession();

	const user = useMemo(() => {
		return session?.user?.name;
	}, [session]);

	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: "api/adminChat",
		maxToolRoundtrips: 3,
	});

	const router = useRouter();

	const logout = async () => {
		await signOutSession();
		router.push("/");
	};

	return (
		<div className="flex justify-center dark:bg-gray-950">
			<div className="w-full max-w-md flex-grow overflow-y-auto py-8 space-y-4">
				<div className="space-y-4">
					<h2>{user ? "Welcome " + user : "Loading..."}</h2>
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
						className="w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
						value={input}
						placeholder="Ask or tell me about Mike..."
						onChange={handleInputChange}
					/>
				</form>
				<button
					className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={logout}
				>
					Logout
				</button>
			</div>
		</div>
	);
}
