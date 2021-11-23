import React, { useContext } from "react";
import "./resources.css";
import Card from "../../GlobalComponents/Card";
import { ThemeContext } from "../../Context";

const Resources = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="section-resources" id="resource">
      <p className="section-title">
        GO TO <span>Resources</span>
      </p>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
          <p className="resources-description">
            The below mentioned websites are always a great picks to refer which
            would ease approach for learning .
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
          <div className="resource-items">
            <Card>
              <div className="resource-item__name">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web"
                  style={{
                    color: darkMode ? "#f7f7f7" : "#2c2c2c",
                  }}
                >
                  MDN Documentation
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
          <div className="resource-items">
            <Card>
              <div className="resource-item__name">
                <a
                  href="https://www.w3schools.com/"
                  style={{
                    color: darkMode ? "#f7f7f7" : "#2c2c2c",
                  }}
                >
                  W3 Schools
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
          <div className="resource-items">
            <Card>
              <div className="resource-item__name">
                <a
                  href="https://css-tricks.com/"
                  style={{
                    color: darkMode ? "#f7f7f7" : "#2c2c2c",
                  }}
                >
                  CSS Tricks
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
          <div className="resource-items">
            <Card>
              <div className="resource-item__name">
                <a
                  href="https://reactjs.org/"
                  style={{
                    color: darkMode ? "#f7f7f7" : "#2c2c2c",
                  }}
                >
                  ReactJs Documentation
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
          <div className="resource-items">
            <Card>
              <div className="resource-item__name">
                <a
                  href="https://getbootstrap.com/"
                  style={{
                    color: darkMode ? "#f7f7f7" : "#2c2c2c",
                  }}
                >
                  Bootstrap
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
          <div className="resource-items">
            <Card>
              <div className="resource-item__name">
                <a
                  href="https://alligator.io/"
                  style={{
                    color: darkMode ? "#f7f7f7" : "#2c2c2c",
                  }}
                >
                  Alligator.io
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
          <div className="resource-items">
            <Card>
              <div className="resource-item__name">
                <a
                  href="https://www.geeksforgeeks.org/web-development/?ref=shm"
                  style={{
                    color: darkMode ? "#f7f7f7" : "#2c2c2c",
                  }}
                >
                  GeeksforGeeks
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
