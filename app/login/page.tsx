"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
			router.push("/admin");
		}

		setPassword("");
	};

	return (
		<div className="flex justify-center items-center py-4 bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Password:
						</label>
						<input
							type="password"
							id="password"
							value={password}
							autoComplete="current-password"
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
