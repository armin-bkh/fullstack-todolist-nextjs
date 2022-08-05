import React, { useEffect, useMemo, useState } from "react";
import { useContext } from "react";

export type Themes = "light" | "dark";

export type TTheme = {
  theme: Themes | null;
  handleToggleTheme: () => void;
};

export const ThemeContext = React.createContext<TTheme>({} as TTheme);

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  const [theme, setTheme] = useState<Themes | null>(null);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleAutoThemeChange);

    const browserTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const savedTheme = localStorage.getItem("APP_THEME");
    const defaultTheme = savedTheme || browserTheme;
    document.documentElement.classList[
      defaultTheme === "dark" ? "add" : "remove"
    ]("dark");

    setTheme(defaultTheme as TTheme["theme"]);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleAutoThemeChange);
    };
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("APP_THEME", theme);
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList[theme === "light" ? "add" : "remove"](
      "dark"
    );
  };

  const handleAutoThemeChange = ({ matches }: any) => {
    setTheme(matches ? "dark" : "light");
    document.documentElement.classList[matches ? "add" : "remove"]("dark");
  };

  const themeValue = useMemo(
    () => ({
      theme,
      handleToggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      {theme && children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
