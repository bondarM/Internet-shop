import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      PassError: false,
      loginErrorBody: "",
      show: true,
      name: "",
      error: false,
      error2: false,
      pass: "",
      errText: "Заполните оба поля (не менее 4-х символов) ",
      enter: "",
      history: "",
    };

    this.getName = this.getName.bind(this);
  }

  getName(e) {
    let name = e.target.name;
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.validation(name);
    });
  }

  validation(mark) {
    if (mark == "name") {
      if (this.state.name.length < 4) {
        this.setState({ error: true });
      } else {
        this.setState({ error: false });
      }
    }

    if (mark == "pass") {
      if (this.state.pass.length < 4) {
        this.setState({ error2: true });
      } else {
        this.setState({ error2: false });
      }
    }
  }

  getLogin() {
    if (!this.state.error && !this.state.error2) {
      axios
        .post("http://localhost:4000/login", {
          user: {
            name: this.state.name,
            password: this.state.pass,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.props.setLogin(true);
            console.log(res);

            this.props.history.push("/userRoom");
          }
        })
        .catch((err) => {
          if (err.response.status == 404) {
            this.setState({ loginError: true });
            const tempLogin = this.state.name;
            this.setState({
              loginErrorBody: `User  "${tempLogin}" doesn't exist`,
            });
          } else if (err.response.status == 401) {
            this.setState({ PassError: true });
            this.setState({
              loginErrorBody: `Password is not correct`,
            });
          } else {
            console.log(err);
          }
        });
    }
  }

  render() {
    console.log(this.state.PassError);

    return (
      <Container>
        <Row className="justify-content-center log__in">
          <Col md={4}>
            <p> Login </p>
            <div class="form-group ">
              <input
                onChange={this.getName}
                type="text"
                className={
                  this.state.error ? "input__class danger" : "input__class"
                }
                id="exampleInputEmail1"
                name="name"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                value={this.state.name}
              />
              {this.state.loginError ? (
                <h1 className="user__varification">
                  <FontAwesomeIcon
                    className="p__fa2"
                    icon={faExclamationCircle}
                    size="2x"
                    color="red"
                  />
                  {this.state.loginErrorBody}
                </h1>
              ) : null}
            </div>
          </Col>
          <Col md={4}>
            <p> Password </p>
            <div class="form-group ">
              <input
                onChange={this.getName}
                type="text"
                name="pass"
                value={this.state.pass}
                className={
                  this.state.error2 ? "input__class danger2" : "input__class"
                }
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
              />

              {this.state.PassError ? (
                <h1 className="user__varification">
                  <FontAwesomeIcon
                    className="p__fa2"
                    icon={faExclamationCircle}
                    size="2x"
                    color="red"
                  />
                  {this.state.loginErrorBody}
                </h1>
              ) : null}
            </div>
          </Col>
          <Col md={2}>
            <div className="m_20">
              <button
                onClick={this.getLogin.bind(this)}
                className="bt__section"
              >
                Log In
              </button>
            </div>
          </Col>
        </Row>{" "}
        <Row>
          <Link to="/register">
            <div className="get__registred">not registered yet? </div>{" "}
          </Link>
        </Row>
      </Container>
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
  )(LogIn)
);
