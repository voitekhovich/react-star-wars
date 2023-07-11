import React from "react";
import { useContext } from "react";
import { useState } from "react";

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, props }) => {
  const [theme, setTheme] = useState();
  const change = (name) => {
    setTheme(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);