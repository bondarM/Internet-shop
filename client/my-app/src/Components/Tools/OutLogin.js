import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import axios from "axios";

class OutLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  outLogin() {
    axios
      .get("http://localhost:4000/auth")
      .then((res) => {
        this.props.setLogin(false);
        this.props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="">
        <Link className="menu__cart" to="/userRoom">
          <FontAwesomeIcon
            onClick={this.outLogin.bind(this)}
            className="p__fa"
            icon={faSignOutAlt}
            size="1x"
            color="black"
          />
        </Link>{" "}
        Out Login
      </div>
    );
  }
}
export default withRouter(
  connect(
    (state) => ({}),
    (dispatch) => ({
      setLogin: (data) => {
        dispatch({ type: "SET_LOGIN", payload: data });
      },
    })
  )(OutLogin)
);
