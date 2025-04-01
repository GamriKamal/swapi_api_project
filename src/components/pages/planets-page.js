import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../row";

const PlanetsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Row
      left={<PlanetList onItemSelected={(id) => navigate(`/planets/${id}`)} />}
      right={<PlanetDetails itemId={id} />}
    />
  );
};

export default PlanetsPage;
