import React from "react";
import { useNavigate } from "react-router-dom";
import { StarshipList } from "../sw-components";
import Row from "../row";
import StarshipIntro from "../starship-intro";

const StarshipsPage = ( {history} ) => {
  const navigate = useNavigate();

  return (
    <Row
      left={<StarshipList onItemSelected={(itemId) => history.push(itemId)} />}
      right={<StarshipIntro />}
    />
  );
};

export default StarshipsPage;
