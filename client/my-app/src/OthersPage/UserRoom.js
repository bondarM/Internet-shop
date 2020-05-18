import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OutLogin from "../Components/Tools/OutLogin";
class UserRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/auth")
      .then((res) => {
        if (res.data.auth == false) {
          this.props.setLogin(false);
          this.props.history.push("/login");
        } else {
          this.props.setLogin(true);
        }
      })
      .catch((err) => {
        // this.props.setLogin(false);
      });
  }

  render() {
    return (
      <div className="">
        <Container>
          <Row className="p_text justify-content-center">
            <Col lg={12}>
              <div>
                <div className="d-flex justify-content-center">
                  Name user <img className="user__img" /> <OutLogin />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}> </Col>
            <Col lg={4}>
              {" "}
              <div className="info__user__room">
                <h3>mail</h3>
                <p>sadasd@asda.com</p>
                <p className="border__line2"></p>
                <h3>number</h3>
                <p>+234234234234234</p>
                <p className="border__line2"></p>
                <h3>pass</h3>
                <p>aHhjhkH667</p>
                <p className="border__line2"></p>
                <h3>name</h3>
                <p>meba</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({
      auth: state.auth.login,
    }),
    (dispatch) => ({
      setLogin: (data) => {
        dispatch({ type: "SET_LOGIN", payload: data });
      },
    })
  )(UserRoom)
);
