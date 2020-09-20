// Internal Dependencies
import React from "react";
import { Row, Col } from "react-bootstrap";

// External Dependencies
import MoviesList from "../MoviesList/MoviesList";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <MoviesList />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
