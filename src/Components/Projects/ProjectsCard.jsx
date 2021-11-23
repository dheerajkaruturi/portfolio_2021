import React, { Fragment } from "react";
import "./projects.css";
import Card from "../../GlobalComponents/Card";

const ProjectsCard = (props) => {
  return (
    <Fragment>
      <div className="p-3 project-card__foodApp">
        <Card>
          <div className="App__flex-container">
            <div className="App__img">
              <img src={props.img} alt="pizza-img" />
            </div>
            <div className="App__description p-3">
              <p className="description__title">{props.title}</p>
              <p className="description__paragraph">{props.description}</p>
            </div>
            <div className="App-button">
              <a
                href="https://github.com/dheerajkaruturi"
                className="button__App-link"
              >
                Visit Github
              </a>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default ProjectsCard;
