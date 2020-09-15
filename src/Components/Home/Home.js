import React from "react";
import { Navbar, MovieCard, Banner } from "../Shared";
import { Container, Row, Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Navbar />
          <Row>
            <Col>
              <Banner />
            </Col>
          </Row>
          <Row>
            <Col>
              <MovieCard />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
