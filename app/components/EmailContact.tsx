"use client";

import { useTransition, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const EmailContact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [isPending, startTransition] = useTransition();

	const handleSubmitContact = (formData: FormData) => {
		startTransition(async () => {
			const name = formData.get("name") as string;
			const email = formData.get("email") as string;
			const message = formData.get("message") as string;

			const res = await fetch("/api/mail", {
				method: "POST",
				body: JSON.stringify({ name, email, message }),
			});

			if (res?.status === 200) {
				toast.success("Message sent!");
				formRef.current?.reset();
			} else {
				toast.error("Failed to send message");
			}
		});
	};

	return (
		<div>
			<div>
				<Toaster />
			</div>
			<h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Mike</h2>
			<form ref={formRef} action={handleSubmitContact} className="space-y-4">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						required
						disabled={isPending}
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						required
						disabled={isPending}
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						required
						disabled={isPending}
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
					disabled={isPending}
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default EmailContact;
