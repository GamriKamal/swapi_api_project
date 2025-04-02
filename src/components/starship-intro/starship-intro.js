import React from "react";

import intro from "./starship-intro.png";
import "./starship-intro.css";

const StarshipIntro = () => {
  return (
    <div className="intro-img">
      <div className="ii">
        <img src={intro} alt="Starships" />
      </div>
    </div>
  );
};

export default StarshipIntro;
