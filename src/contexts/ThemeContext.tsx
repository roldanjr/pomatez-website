import React, { useState, useEffect } from "react";
import {
	isPreferredDark,
	getFromStorage,
	saveToStorage,
	isSSR,
} from "../utils";
import { GlobalStyle } from "../styles";

type ThemeProps = {
	isDarkMode?: boolean;
	themeToggler?: () => void;
};

const ThemeContext = React.createContext<ThemeProps>({});

const ThemeProvider: React.FC = ({ children }) => {
	const useDarkMode =
		(!isSSR && getFromStorage("isDarkmode")) || (!isSSR && isPreferredDark());
	const [isDarkMode, setDarkMode] = useState(useDarkMode || null);

	useEffect(() => {
		if (isDarkMode === null) {
			setDarkMode(isPreferredDark());
		}
		saveToStorage("isDarkmode", isDarkMode);
	}, [isDarkMode]);

	const themeToggler = () => {
		setDarkMode((prevState: boolean) => !prevState);
	};

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode,
				themeToggler,
			}}
		>
			<GlobalStyle isDarkMode={isDarkMode} />
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
