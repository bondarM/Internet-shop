import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class NotFound extends React.Component {
  render() {
    return (
      <div className="page404">
        <Container>
          <Row className="p_text justify-content-center">
            <Col lg={12}>
              <div className="not__found p_text">
                <h1 className="page__404">404</h1>
                <p className="page__found">Ops...Page not found.</p>
                <img className="p404_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NotFound;
