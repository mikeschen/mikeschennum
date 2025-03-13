"use client";

import { useContext } from "react";
import Image from "next/image";
import authorPortrait from "../../public/images/hero-main.jpg";
import authorPortraitDark from "../../public/images/hero-main-dark.png";
import MessagesInput from "../components/MessagesInput";
import ThemeContext from "../contexts/ThemeContext";

export default function UserChat() {
	const { darkMode } = useContext(ThemeContext);

	return (
		<div className="flex dark:bg-gray-950 pt-4">
			<div className="w-1/2 pt-2">
				<div className="relative grid justify-items-end">
					<Image
						src={darkMode ? authorPortraitDark : authorPortrait}
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
