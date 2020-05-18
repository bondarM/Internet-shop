import React from "react";
import { Col, Row, Container, Form } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container className="col__foot">
        <Row className="justify-content-center">
          <Col lg={3}>
            <div className="footer-left media__center">
              <div className="footer-logo ">
                <h3 className="footer__contact">Contact</h3>
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: www.@gmail.com</li>
              </ul>
              <div className="footer-social media__padding ">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={2} className=" offset-lg-1">
            <div className="footer-widget media__center ">
              <ul className="">
                <h5>Information</h5>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Serivius</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="footer-widget media__center">
              <ul className="media__padding">
                {" "}
                <h5>My Account</h5>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Shopping Cart</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div className="newslatter-item media__center media__none">
              <h5>Join Our Newsletter Now</h5>
              <p className="media__none">
                Get E-mail updates about our latest shop and special offers.
              </p>
              <Form action="#" className="subscribe-form">
                <input type="text" placeholder="Enter Your Mail"></input>
              </Form>

              <button className="bt__section" type="button">
                Subscribe
              </button>
            </div>
          </Col>
        </Row>

        <Container className="copyright-reserved">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="copyright-text"></div>
                <div className="payment-pic">
                  <img src="img/payment-method.png" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Footer;
