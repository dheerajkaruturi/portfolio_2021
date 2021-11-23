import React, { Fragment, useContext } from "react";
import "./toggle.css";
import sun from "../../../assets/light_mode_black_24dp.svg";
import moon from "../../../assets/dark_mode_black_24dp.svg";
import { ThemeContext } from "../../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const darkModeHandler = function () {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <Fragment>
      <div className="toggle-mode">
        <img src={sun} className="toogle__icon" alt="sun" />
        <img src={moon} className="toggle__icon" alt="moon" />
        <div className="toggle-mode__button" onClick={darkModeHandler} style={{
          left: theme.state.darkMode ? 0 : '2rem'
        }}></div>
      </div>
    </Fragment>
  );
};

export default Toggle;
