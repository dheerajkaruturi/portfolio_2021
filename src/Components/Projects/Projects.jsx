import React from "react";
import "./projects.css";
import pizzaImg from "../../assets/omniFood.jpg";
import bankistApp from '../../assets/bankistApp.jpg';
import listingApp from '../../assets/listingApp.jpg';
import stockApp from '../../assets/StockApp.jpg';
import coins from '../../assets/moneyPic.jpg';
import num from '../../assets/numbers.jpg';
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="project-section__title">
        <p>
          My <span>projects</span>
        </p>
      </div>
      <div className="project-cards__container p-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <p className="projects-section__intro">
              These below projects, have been developed while learning Frontend
              development through multiple sources using modern techniques which
              includes Responsive Web Design, React Applications and UI/UX
              Design Approaches.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <ProjectsCard
              img={pizzaImg}
              title="Omni Food"
              description="A restuarent marketing commercial website that gives the information and details of menu items that are available. And is a responsive website too."
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <ProjectsCard
              img={bankistApp}
              title="The Bankist App"
              description="A commercial Bank website made using ES6 Javascript features. With added scroll behaviours, Lazy-Loading and Image Carousels"
              link="https://github.com/dheerajkaruturi/bankistApp"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <ProjectsCard
              img={listingApp}
              title="Make a List of People Ages"
              description="An app made using React while learning. It takes an input of user name and age, prints it in a listed format. Uses basic concepts of ReactJS."
              link="https://github.com/dheerajkaruturi/List_of_users_age"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <ProjectsCard
              img={stockApp}
              title="Make Money with Money"
              description="App that helps user to purchase a stock of his desired company and can watch the trends of the market day to day. We can add money to the wallet and can use that money to purchase share."
              link="https://github.com/dheerajkaruturi/marketapp"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <ProjectsCard
              img={num}
              title="Guess The Number"
              description="Just a fun application which ask us to guess an number between 1-20 and if the guess is correct it gives the response, using Javascript ES6 DOM manipulation"
              link="https://github.com/dheerajkaruturi/marketapp"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
            <ProjectsCard
              img={coins}
              title="Bank App"
              description="Bank App that tells the user about his transactions and also available balance in the account. Made using Javascript in briefing on Arrays ES6 "
              link="https://github.com/dheerajkaruturi/marketapp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
