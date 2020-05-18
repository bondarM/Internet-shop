import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BuyItem from "../Components/Tools/BuyItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props;
    this.mainUrl = "http://localhost:4000";
    this.idUrl = "/items/";
    this.state = {
      item: [],
    };
  }
  componentDidMount() {
    this.item();
  }

  item() {
    axios
      .get(`http://localhost:4000/cart`)
      .then((res) => {
        this.setState({ item: res.data.cart }, () => {});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCart(e) {
    axios
      .delete(`http://localhost:4000/cart`, {
        data: { id: e.target.attributes["name"].value },
      })
      .then((res) => {
        this.item();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let itemCart = this.state.item.map((el, i) => {
      return (
        <div className="d-flex">
          <Col lg={3}>
            <Link to={`${this.idUrl}${el.item.id}`}>
              <img
                className="info__cart img__in__cart"
                src={`${this.mainUrl}/${el.item.urlProduct}`}
              />
            </Link>
          </Col>

          <Col lg={3} className="info__cart">
            <h2 className="d-flex cart__it__name">{el.item.name}</h2>
            <p className="cart__font">{el.item.color}</p>
            <p className="cart__font">{el.item.size[0]}</p>
          </Col>

          <Col lg={2} className="info__cart cart__font m_top_cart">
            {el.item.price}.00 USD
          </Col>
          <Col lg={2} className=" d-flex info__cart cart__font m_top_cart">
            <p onClick="">-</p> {el.quantity} <p>+</p>
          </Col>
          <Col lg={2} className="info__cart cart__font m_top_cart cart__remove">
            <div onClick={this.deleteCart.bind(this)} name={el.item.id}>
              Х
            </div>
          </Col>
        </div>
      );
    });

    return (
      <div>
        <Row className="p_text justify-content-center cart_top_bt">
          <Col lg={9}>
            <Row>
              <p className="border__line5"></p>
            </Row>
            {itemCart}
          </Col>
          <BuyItem price={this.state.item} />
        </Row>
      </div>
    );
  }
}
export default connect(
  (state) => ({}),
  (dispatch) => ({
    incriment: (add) => {
      dispatch({ type: "SET_ADD", payload: add });
    },
  })
)(Cart);
