import React from "react";
import "./aboutme.css";
import design from "../../assets/5.svg";
import html_css_js from "../../assets/htmlcssjs.svg";
import reactSVG from "../../assets/react.svg";
import AboutMeTechCards from "./AboutMeTechCards";

const AboutMe = () => {
  return (
    <section className="about-me__section" id="aboutme">
      <p className="section-title">
        Get to <span>Know Me!</span>
      </p>
      <div className="p-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <div className="about-me_description">
              <p className="description__paragraph p-3">
                Enthusiastic and a Self Learnt Web Developer, I code Simple yet
                Elegant Web Pages. Followed by my bachelors in Electrical and
                Electronics Engineering from{" "}
                <b className="fw-bolder">Amrita Vishwa Vidyapeetam</b>, In the
                later part of my Journey there by some means i gradually
                developed my interest towards learning the basics of frontend
                design which just started with HTML5,later pickedup the pace
                with CSS3, Javascript and Bootstrap which furtherly enabled me
                to gain corporate experience at{" "}
                <a href="http://audreeinfotech.com/">
                  <b>Audree Infotech Pvt Ltd</b>
                </a>{" "}
                which is the Subsidiary of <b>HETERO DRUGS</b> where I designed
                templates for Numerous Applications.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <AboutMeTechCards
              svgLocation={design}
              description="I strive for two things in design: Simplicity and Clarity. Well Motivated to design for both Mobile and Web with added ease of User Interaction. Design Tool that I personally use is Adobe XD for prototyping and hi-fi mock up designs."
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <AboutMeTechCards
              svgLocation={html_css_js}
              description=" HTML, CSS, and Javascript and Bootstrap add a strong base to pave frontend design ,playing around these pillars would really help being creative. Besides, CSS preprocessors like SASS(SCSS), reduces line of rules in CSS."
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <AboutMeTechCards
              svgLocation={reactSVG}
              description="Over the time kickingoff my interest for design, A newbie into the world of React Js. A Javascript framework where the key concepts like state, props and prop drilling, hooks, http requests, redux, single page applications are really absorbing "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
