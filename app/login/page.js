"use client";

import { useFormState } from "react-dom";
import { authenticate } from "../../lib/actions/authenticate";

export default function LoginPage() {
	const [errorMessage, formAction, isPending] = useFormState(
		authenticate,
		undefined
	);

	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
				<form action={formAction} className="space-y-3">
					<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
						<h1 className="mb-3 text-2xl">Please log in to continue.</h1>
						<div className="w-full">
							<div>
								<label
									className="mb-3 mt-5 block text-xs font-medium text-gray-900"
									htmlFor="email"
								>
									Email
								</label>
								<div className="relative">
									<input
										autoFocus
										className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
										id="email"
										type="email"
										name="email"
										autoComplete="username"
										placeholder="Enter your email address"
										required
									/>
								</div>
							</div>
							<div className="mt-4">
								<label
									className="mb-3 mt-5 block text-xs font-medium text-gray-900"
									htmlFor="password"
								>
									Password
								</label>
								<div className="relative">
									<input
										className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
										id="password"
										type="password"
										name="password"
										placeholder="Enter password"
										autoComplete="current-password"
										required
										minLength={6}
									/>
								</div>
							</div>
						</div>
						<button
							className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							aria-disabled={isPending}
						>
							Log In
						</button>
						<div
							className="flex h-8 items-end space-x-1"
							aria-live="polite"
							aria-atomic="true"
						>
							{errorMessage && (
								<>
									<p className="text-sm text-red-500">{errorMessage}</p>
								</>
							)}
						</div>
					</div>
				</form>
			</div>
		</main>
	);
}
