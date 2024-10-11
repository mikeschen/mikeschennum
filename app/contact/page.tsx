import EmailContact from "../components/EmailContact";

export default function Contact() {
	return (
		<div className="bg-gray-100 p-8">
			<div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
				<div className="space-y-4">
					<div>
						<h2 className="text-xl font-semibold">Email</h2>
						<a
							href="mailto:mikeschenphoto@gmail.com"
							className="text-green-500"
						>
							mikeschenphoto@gmail.com
						</a>
					</div>

					<div>
						<h2 className="text-xl font-semibold">Address</h2>
						<p className="text-green-500">Phoenix, AZ</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold">Phone</h2>
						<a href="tel:+16025408776" className="text-green-500">
							(602) 540-8776
						</a>
					</div>
					<EmailContact></EmailContact>
				</div>
			</div>
		</div>
	);
}
