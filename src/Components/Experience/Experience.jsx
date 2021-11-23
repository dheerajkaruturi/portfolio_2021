import React from "react";
import "./Experience.css";
import working from "../../assets/working.svg";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <p className="section-title">
        Professional <span>Experience</span>
      </p>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
          <div className="experience-img">
            <img
              src={working}
              alt="working"
              className="experience-img__working"
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
          <div className="experience-description">
            <p>
              Worked as Junior software Designer for good 1 Year at Audree
              Infotech Pvt Ltd which is the Subsidiary of HETERO DRUGS .The
              Initial pull would start with having a project design plan
              discussion with Quality Assurance team along client if required,
              then from creating Mockups followed by Sprint changes to Designing
              the whole set of Application and to checkup on the Pre production
              impacts inturn making sure to deliver on time . Projects I have
              worked on are APQR, Batch Process, Quality Metrics, LIMS(major
              contribution), DMS, MTS, LMS. Working with LIMS has been the major
              part, discussing with the QA dept., and designing the application
              from the start.HTML, CSS, Bootstrap and Javascript are mainly
              used. This whole span was healthy hands-on which inturn pushedme
              to widden my path towards seeding into the hot cake now which is
              the React JS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
