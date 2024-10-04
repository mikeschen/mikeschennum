import { useSession } from "next-auth/react";
import LoginForm from "./LoginForm";
import AdminChat from "./AdminChat";

export default function AdminDashboard() {
	const { data: session, status } = useSession();

	return status === "loading" ? (
		<div>Loading...</div>
	) : session ? (
		<AdminChat session={session} />
	) : (
		<LoginForm />
	);
}
