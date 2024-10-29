"use client";

import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedMode = localStorage.getItem("darkMode") === "true";
		setDarkMode(savedMode);
		if (savedMode) {
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle("dark", !darkMode);
		localStorage.setItem("darkMode", (!darkMode).toString());
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
