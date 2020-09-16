import React from "react";
import { MainNavBar, Banner } from "../Shared";
import { Container, Row, Col } from "react-bootstrap";
import MoviesList from "../MoviesList/MoviesList";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNavBar />
        <Container fluid>
          <Row>
            <Col>
              <Banner />
            </Col>
          </Row>
          <Row>
            <Col>
              <MoviesList />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
