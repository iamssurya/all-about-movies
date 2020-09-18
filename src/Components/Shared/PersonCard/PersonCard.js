import React from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { MoviePosterBasePath } from "site-config";

import "./PersonCard.scss";

const PersonCard = ({ profile_path, name }) => {
  const imagePath = MoviePosterBasePath + profile_path;

  return (
    <Card className="person-card">
      <Card.Img src={imagePath} alt={name} className="person-poster" />
      <Card.Body className="person-title">
        <Card.Text className="text-center">{name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default withRouter(PersonCard);
