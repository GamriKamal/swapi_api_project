import React from "react";
import WelcomeHeader from "../welcome-header/welcome-header";

const WelcomePage = () => {
  console.log("WelcomePage rendered");

  return (
    <div className="jumbotron">
      <WelcomeHeader />
    </div>
  );
};

export default WelcomePage;
