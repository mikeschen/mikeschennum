import Image from "next/image";
import authorPortrait from "../public/images/hero-main.jpg";
import MessagesInput from "./components/MessagesInput";

export default function UserChat() {
	return (
		<div className="flex">
			<div className="w-1/2 pt-2">
				<div className="relative min-h-screen grid justify-items-end">
					<Image
						src={authorPortrait}
						alt="Author at work on his laptop"
						priority
						height={400}
					></Image>
				</div>
			</div>
			<div className="w-1/2">
				<MessagesInput />
			</div>
		</div>
	);
}
