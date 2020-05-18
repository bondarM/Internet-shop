import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: false,
      error2: false,
      error3: false,
      pass: "",
      age: "",
      history: "",
    };

    this.getName = this.getName.bind(this);
  }
  componentDidMount() {}

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

    if (mark == "age") {
      if (this.state.age < 18) {
        this.setState({ error3: true });
      } else {
        this.setState({ error3: false });
      }
    }
  }

  getRegistration() {
    if (!this.state.error && !this.state.error2 && !this.state.error3) {
      axios
        .post("http://localhost:4000/registration", {
          user: {
            name: this.state.name,
            password: this.state.pass,
            age: this.state.age,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.props.history.push("/userRoom");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(this.state.name);
  }

  render() {
    return (
      <div className="">
        <Container>
          <Row className="">
            <Col lg={4} className="register">
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
              </div>

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
              </div>
              <p> Age </p>
              <div class="form-group ">
                <input
                  onChange={this.getName}
                  type="text"
                  name="age"
                  value={this.state.age}
                  className={
                    this.state.error3 ? "input__class danger2" : "input__class"
                  }
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
              <div className="m_20">
                <button
                  onClick={this.getRegistration.bind(this)}
                  className="bt__section"
                >
                  Log In
                </button>
              </div>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    );
  }
}
export default withRouter(Register);
