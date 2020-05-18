import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Row className=" media__bg ">
          <Col md={12}>
            <div className="media__none2">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100 footer__banner1 footer__banner" />
                  <Carousel.Caption>
                    <h3>
                      <Link to="/items">
                        <button className="bt__section">Shop Now</button>{" "}
                      </Link>
                    </h3>
                    <p className="text__banner">
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 footer__banner2 footer__banner" />

                  <Carousel.Caption>
                    <h3>
                      <Link to="/items">
                        <button className="bt__section">Shop Now</button>
                      </Link>
                    </h3>
                    <p className="text__banner">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 footer__banner3 footer__banner" />

                  <Carousel.Caption>
                    <h3>
                      <Link to="/items">
                        <button className="bt__section">Shop Now</button>{" "}
                      </Link>
                    </h3>
                    <p className="text__banner">
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col
              md={4}
              className="block__sex block__section block__section__men "
            >
              <div className="">
                <a href="#">
                  <p className="border__sex">Men's</p>
                </a>
              </div>
            </Col>
            <Col
              md={4}
              className=" block__sex block__section__wom block__section"
            >
              <div className="">
                <a href="#">
                  <p className="border__sex">Women's</p>
                </a>
              </div>
            </Col>
            <Col
              md={4}
              className="block__sex block__section__kid block__section"
            >
              <div className="">
                <a href="#">
                  <p className="border__sex">Kid's</p>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
