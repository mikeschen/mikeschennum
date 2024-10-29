import { useState, KeyboardEvent } from "react";

interface ToggleProps {
	toggle: () => void;
	children: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ toggle, children }) => {
	const [isEnabled, setIsEnabled] = useState<boolean>(false);

	const handleToggle = (): void => {
		setIsEnabled(!isEnabled);
		toggle();
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleToggle();
		}
	};

	return (
		<div
			role="switch"
			aria-checked={isEnabled}
			tabIndex={0}
			className={`
        w-12 h-6 bg-gray-300 rounded-full p-0.5 cursor-pointer transition-colors duration-300
        ${isEnabled ? "bg-green-500" : ""}
      `}
			onClick={handleToggle}
			onKeyDown={handleKeyDown}
		>
			<div
				className={`
          h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300
          ${isEnabled ? "translate-x-6" : ""}
        `}
			>
				{children}
			</div>
		</div>
	);
};

export default Toggle;
