import React from "react";
import "./aboutme.css";
import Card from "../../GlobalComponents/Card";

const AboutMeTechCards = (props) => {
  return (
    <div>
      <Card className="card-hover_effect">
        <div className="aboutMe-card">
          <div className="aboutMe-card__svg">
            <img src={props.svgLocation} alt="design-svg" />
          </div>
        </div>
        <hr />
        <div className="design_description">
          <p>{props.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default AboutMeTechCards;
