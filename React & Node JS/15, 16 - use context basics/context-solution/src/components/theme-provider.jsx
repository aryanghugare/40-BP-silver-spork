import { createContext, useState } from "react";
export const ThemeContext = createContext("dark");

export default function ThemeProvider({ children, initialValue = "dark" }) {
  const [theme, setTheme] = useState(initialValue);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
