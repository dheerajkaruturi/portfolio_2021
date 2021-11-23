import React, { useContext } from "react";
import './App.css';
import { ThemeContext } from "./Context";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Toggle from "./Components/NavBar/DarkModeToggle/Toggle";
import Home from "./Components/Home/Home.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Resources from "./Components/Resources/Resources.jsx";
import Footer from "./Components/Contact/Footer.jsx";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='wrapper__div' style={{ backgroundColor: darkMode ? '#121212' : '#f7f7f7', color: darkMode ? '#f7f7f7' : '#2c2c2c'}}>
      <header>
        <Navbar />
      </header>
      <Toggle />
      <div className="container">
        <Home />
        <AboutMe />
        <Projects />
        <Experience />
        <Resources />
      </div>
      <Footer />
    </div>
  );
};

export default App;
