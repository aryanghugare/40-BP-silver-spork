import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="main-header">
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle theme({theme})
      </button>
    </header>
  );
}
