import { useContext } from "react";
import Toggle from "./BaseToggle";
import ThemeContext from "../contexts/ThemeContext";

function ToggleDarkMode(): JSX.Element {
	const { darkMode, toggleDarkMode } = useContext(ThemeContext);

	return (
		<Toggle toggle={toggleDarkMode}>
			{darkMode ? "\u{1F31A}" : "\u{1F31D}"}
		</Toggle>
	);
}

export default ToggleDarkMode;
