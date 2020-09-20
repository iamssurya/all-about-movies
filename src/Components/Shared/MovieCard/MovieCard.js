import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { MdThumbUp } from "react-icons/md";
import { withRouter } from "react-router-dom";
import { MoviePosterBasePath } from "site-config";

import "./MovieCard.scss";

const imageBasePath = MoviePosterBasePath;
class MovieCard extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      vote_count: PropTypes.number.isRequired,
    }),
  };

  navigateToDetail = () => {
    const {
      history,
      data: { id },
    } = this.props;
    history.push("/movie/" + id);
  };

  render() {
    const { data } = this.props;
    const imagePath = imageBasePath + data.backdrop_path;
    return (
      <Col xs={12} md={2} sm={4} onClick={this.navigateToDetail}>
        <Card className="movie-card bg-dark text-white">
          <Card.Img src={imagePath} alt={data.title} className="movie-poster" />
          <Card.Body className="movie-title">
            <Card.Text className="text-center">{data.title}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>{new Date(data.release_date).getFullYear() || "N/A"}</Col>
              <Col className="text-right">
                <MdThumbUp /> <span>{data.vote_count}</span>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default React.memo(withRouter(MovieCard));
