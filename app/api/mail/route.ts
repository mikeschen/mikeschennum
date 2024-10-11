import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
	const { name, email, message } = await req.json();

	const msg = {
		to: "mike@mikeschen.com",
		from: "mike@mikeschen.com",
		subject: "Email from mikeschen.com",
		text: `Name: ${name} Email: ${email} Message: ${message}`,
	};

	try {
		await sgMail.send(msg);
		return NextResponse.json({
			success: true,
			message: "Email sent successfully",
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, message: "Failed to send email" },
			{ status: 500 }
		);
	}
}
