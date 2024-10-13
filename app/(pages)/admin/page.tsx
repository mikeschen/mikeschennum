"use client";

import { SessionProvider } from "next-auth/react";
import AdminDashboard from "../../components/AdminDashboard";

const AdminPage = () => {
	return (
		<SessionProvider>
			<AdminDashboard />
		</SessionProvider>
	);
};

export default AdminPage;
