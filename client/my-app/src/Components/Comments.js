import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      comment: "",
      error: false, // false = ошибки нет
      errorText: "",
      infoUser: [],
    };
  }

  getUsers = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getComment() {
    if (this.state.name.length < 4 || this.state.comment.length < 4) {
      this.setState({ errorText: "Слишком короткое сообщение" });
      this.setState({ error: true });

      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);
    } else {
      const date = new Date();
      const newComm = {
        name: this.state.name,
        date: `${date.getDate()}. ${date.getMonth()}. ${date.getFullYear()}`,
        comment: this.state.comment,
      };
      this.setState({ infoUser: [...this.state.infoUser, newComm] });
      this.setState({ name: "", comment: "" });
    }
  }

  render() {
    const comms = this.props.comm.map((el, i) => {
      return (
        <div className="block__comments ">
          <p className="block__name d-flex ">
            <img className="user__img" /> USER1
            <p className="ml-auto block_date"> Date: 1.3.2020</p>
          </p>
          <p className="block__comment">{el.body}</p>
        </div>
      );
    });

    const infoUser = this.state.infoUser.map((el, i) => {
      return (
        <div className="block__comments ">
          <p className="block__name d-flex ">
            <img className="user__img" /> USER: {el.name}
            <p className="ml-auto block_date"> Date: {el.date}</p>
          </p>
          <p className="block__comment">{el.comment}</p>
        </div>
      );
    });

    return (
      <Container className="media__none_comm">
        <Row className="d-flex border__comment justify-content-center ">
          <Col lg={3}></Col>{" "}
          <Col lg={6}>
            <div className="form-group media__center margin__comm">
              <label for="exampleInputEmail1"> NAME</label>
              <input
                onChange={this.getUsers}
                type="text"
                className=" user__name"
                placeholder="Enter title"
                name="name"
                value={this.state.name}
              />
              <label for="exampleInputEmail1">COMMENT</label>
              <input
                onChange={this.getUsers}
                type="text"
                className=" user__name"
                placeholder="Enter title"
                name="comment"
                value={this.state.comment}
              />
              <button
                onClick={this.getComment.bind(this)}
                className="bt__section  "
              >
                Add comment
              </button>
            </div>
          </Col>
          <Col lg={3}></Col>
          <Row clsassName="d-flex justify-content-center">
            <Col lg={12}>
              {comms} {infoUser}
            </Col>
          </Row>
          <p className="border__prod"></p>
        </Row>
      </Container>
    );
  }
}
export default Comments;
