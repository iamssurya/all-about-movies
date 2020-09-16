import React from "react";
import { Col, Form, FormControl, Navbar, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { peekSearchMovies } from "store/actions/movies";
import { DebounceInput } from "react-debounce-input";
import { selectMovieStore } from "store/dispatchers";

class MainNavBar extends React.Component {
  searchMovies = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const valueToSearch = event.target.value;
    dispatch(selectMovieStore(valueToSearch));
    dispatch(peekSearchMovies(valueToSearch));
  };

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Row className="w-100">
            <Col>
              <Navbar.Brand href="#home">All about Movies</Navbar.Brand>
            </Col>
            <Col xs={6}>
              <Form inline>
                <FormControl
                  as={DebounceInput}
                  type="text"
                  placeholder="Search"
                  debounceTimeout={1000}
                  className="mr-sm-2 w-100"
                  onChange={this.searchMovies}
                />
              </Form>
            </Col>
          </Row>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default connect(() => {})(MainNavBar);
