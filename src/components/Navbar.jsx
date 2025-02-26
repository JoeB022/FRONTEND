import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">LocalShop</a>
        <button className="btn btn-outline-light" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <DarkModeToggle />
      </div> {}
    </nav>
  );
}

export default Navbar;
