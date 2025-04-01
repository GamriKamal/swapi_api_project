import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";

const PeoplePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Row
      left={<PersonList onItemSelected={(id) => navigate(`/people/${id}`)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default PeoplePage;
