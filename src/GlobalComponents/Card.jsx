import React, { useContext } from "react";
import "./card.css";
import { ThemeContext } from "../Context";

const Card = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="white-space"
      style={{
        backgroundColor: darkMode ? "#2c2c2c" : "#fff",
        color: darkMode ? '#f7f7f7' : '#2c2c2c'
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
