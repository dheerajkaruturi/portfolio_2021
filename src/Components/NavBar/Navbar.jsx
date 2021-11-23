import React, { useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../Context";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <nav>
      <div
        className="topNavigation"
        style={{
          backgroundColor: darkMode ? "#2c2c2c" : "#fff",
        }}
      >
        <div className="topNavigtion-nav">
          <ul className="topNavigtion-nav_links">
            <li>
              <a href="#home">
                <i className="icon ion-md-home"></i>
              </a>
            </li>
            <li>
              <a href="#aboutme">
                <i className="icon ion-md-person"></i>
              </a>
            </li>
            <li>
              <a href="#projects">
                <i className="icon ion-md-code-working"></i>
              </a>
            </li>
            <li>
              <a href="#experience">
                <i className="icon ion-md-briefcase"></i>
              </a>
            </li>
            <li>
              <a href="#resource">
                <i className="icon ion-md-rocket"></i>
              </a>
            </li>
            <li>
              <a href="#contactme">
                <i className="icon ion-md-paper-plane"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
