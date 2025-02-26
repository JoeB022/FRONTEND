import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="btn btn-outline-light" onClick={toggleTheme}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;
