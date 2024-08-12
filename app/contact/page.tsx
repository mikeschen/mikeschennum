export default function Contact() {
	return (
		<div className="bg-gray-100 flex items-center justify-center p-8">
			<div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
				<h1 className="text-2xl font-bold mb-6 text-center">Contact Mike</h1>

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
				</div>
			</div>
		</div>
	);
}
