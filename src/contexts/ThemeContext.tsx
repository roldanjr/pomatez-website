import React, { useState, useEffect } from "react";
import { isPreferredDark } from "utils";
import { GlobalStyle } from "styles";

type ThemeProps = {
  isDarkMode?: boolean;
  themeToggler?: () => void;
};

const ThemeContext = React.createContext<ThemeProps>({});

const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setDarkMode(isPreferredDark());
  }, []);

  const themeToggler = () => {
    setDarkMode(prevState => !prevState);
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