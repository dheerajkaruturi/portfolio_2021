import React, {useContext} from "react";
import "./Home.css";
import heroImg from "../../assets/passport_size(compressed).jpg";
import resume from "../../Misc/Sai Dheeraj Karuturi_resume.pdf";
import { ThemeContext } from "../../Context";

const Home = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      className="hero-home__section"
      id="home"
      style={{
        backgroundColor: darkMode ? "#121212" : "#f7f7f7",
        color: darkMode ? "#f7f7f7" : "#2c2c2c",
      }}
    >
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <div className="hero-intro_container">
            <p className="hero-intro_welcome">
              <span>"</span>Design doesn’t mean that every person {"[is]"} gonna
              like, love it, but that’s the creativity of {"[an]"} eye which
              creates something different'.<span>"</span>
            </p>
            <h2>Greetings👋🏼, I'm</h2>
            <h1 className="hero-name">Sai Dheeraj Karuturi,</h1>
            <div
              className="hero-title"
              style={{
                borderColor: darkMode ? "#f10956" : "#000",
              }}
            >
              <div className="hero-title_wrapper">
                <div className="hero-title_item">UI/UX Designer</div>
                <div className="hero-title_item">Web Developer</div>
              </div>
            </div>
            <div className="hero-buttons">
              <a className="butn butn-download" href={resume} download>
                Download Resume
              </a>
              <a
                href="#aboutme"
                className="butn butn-know_more"
                style={{
                  backgroundColor: darkMode ? "#121212" : "#f7f7f7",
                  color: darkMode ? "#fff" : "#2c2c2c",
                }}
              >
                Know more →
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <div className="hero-img_container">
            <img src={heroImg} alt="hero-img" className="hero-img_picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
