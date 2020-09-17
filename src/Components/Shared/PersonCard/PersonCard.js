import React from "react";
import { Card, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { MoviePosterBasePath } from "site-config";

import "./PersonCard.scss";

const PersonCard = (props) => {
  const imagePath = MoviePosterBasePath + props.profile_path;

  const navigateToDetail = () => {
    const { history, id } = props;
    history.push("/person/" + id);
  };

  return (
    <Col xs={12} md={2} sm={4} onClick={navigateToDetail}>
      <Card className="person-card">
        <Card.Img src={imagePath} alt={props.name} className="person-poster" />
        <Card.Body className="person-title">
          <Card.Text className="text-center">{props.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default withRouter(PersonCard);
