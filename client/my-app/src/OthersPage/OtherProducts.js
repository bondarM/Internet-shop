import React from "react";
import QuickBuy from "../Components/Tools/QuickBuy";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faShareAlt } from "@fortawesome/free-solid-svg-icons";

class OtherProduct extends React.Component {
  render() {
    return (
      <Container className=" justify-content-center other__prod__block media__none2">
        <Row className="product__recently">
          Viewed recently
          <p className="border__prod"></p>
        </Row>
        <Row className="media__center">
          <Col lg={3} className="shop__relative">
            <a href="#">
              <img className="img__others1 block__img__ot" />
              <QuickBuy />
            </a>
          </Col>
          <Col lg={3} className="shop__relative">
            <a href="#">
              <img className="img__others2 block__img__ot" />
              <QuickBuy />
            </a>
          </Col>
          <Col lg={3} className="shop__relative">
            <a href="#">
              <img className="img__others3 block__img__ot" />
              <QuickBuy />
            </a>
          </Col>
          <Col lg={3} className="shop__relative">
            <a href="#">
              <img className="img__others4 block__img__ot" />
              <QuickBuy />
            </a>
          </Col>
          <p className="border__prod"></p>
        </Row>
      </Container>
    );
  }
}
export default OtherProduct;
