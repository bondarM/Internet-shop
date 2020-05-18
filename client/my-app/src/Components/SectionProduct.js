import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class SectionProduct extends React.Component {
  render() {
    return (
      <div>
        <Row className="product__wom">
          <Col md={12} className="block__product img__product_1 img__product">
            <p className="section__viev1"> S p r i n g C o l l e c t i o n</p>
            <Link to="/items">
              <button className="bt__section">View more</button>
            </Link>
          </Col>
        </Row>
        <Row className="product__wom">
          <Col md={12} className="block__product img__product_2 img__product">
            <p className="section__viev1"> S u m m e r C o l l e c t i o n </p>
            <Link to="/items">
              <button className="bt__section">View more</button>{" "}
            </Link>
          </Col>
        </Row>

        <Row className="product__wom">
          <Col md={12} className="block__product img__product_3 img__product ">
            <p className="section__viev1 section__viev2">
              S u m m e r C o l l e c t i o n
            </p>
            <Link to="/asdas">
              <button className="bt__section">View more</button>{" "}
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SectionProduct;
