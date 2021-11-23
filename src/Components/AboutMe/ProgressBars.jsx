import React from "react";
import './aboutme.css'

const ProgressBars = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default ProgressBars;
