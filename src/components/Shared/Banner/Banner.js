// External Dependencies
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

// Internal Dependencies
import { MovieBannerBasePath } from "site-config";

import "./Banner.scss";

const mockImage =
  "http://image.tmdb.org/t/p/w1280/x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg";

const Banner = ({
  background,
  title,
  tagline,
  overview,
  releaseDate,
  runtime,
}) => {
  const imageBackground = MovieBannerBasePath + background;
  return (
    <React.Fragment>
      <div
        className="banner"
        style={{
          background: `url('${imageBackground || mockImage}'),#000000`,
          backgroundSize: "100%",
        }}
      >
        <Container>
          <Row>
            <Col className="movie-detail" xs={12} md={{ span: 6, offset: 6 }}>
              <h3>
                {title || "title"} <span>({releaseDate | "N/A"})</span>
              </h3>
              {runtime && <p className="runtime">{runtime} mins</p>}
              {tagline && <p className="tagline">{tagline}</p>}
              <p className="overview">{overview || "overview"}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Banner.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  runtime: PropTypes.number,
};

export default React.memo(Banner);
