import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Comments from "./Comments";
import { withRouter } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Preloader from "./Tools/Prelaoder";
import Colors from "./Tools/CyrclesInput";
import Sizes from "./Tools/SizeInput";
import OtherProduct from "../OthersPage/OtherProducts";
import { connect } from "react-redux";

class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.mainUrl = "http://localhost:4000";
    this.state = {
      selectColor: false,
      item: null,
      preloader: true,
      options: {},
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getItem();
  }

  getItem() {
    axios
      .get(`http://localhost:4000/items/${this.id}`)
      .then((res) => {
        this.setState({ item: res.data.data }, () => {});
        setTimeout(() => {
          this.setState({ preloader: false });
        }, 1200);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  addToCart() {
    axios
      .post("http://localhost:4000/cart", {
        cart: {
          product_id: this.id,
          quantity: 1,
        },
      })
      .then((res) => {
        this.props.incriment(res.data.cart.length);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let item = null;

    if (this.state.item != null) {
      const color = this.state.item.color.map((el, i) => {
        return (
          <a className="d-flex m_color" href="#">
            <p name="check1" className={el}></p>
          </a>
        );
      });

      const images = this.state.item.url.map((el) => {
        return <img className="item__img" src={`${this.mainUrl}/${el}`} />;
      });

      item = (
        <Row className="item__section">
          <Col lg={4}>
            <div className="item__block">
              <p className="item__art">Art: {this.state.item.art}</p>
              <h1 className="item__name">{this.state.item.name}</h1>
              <p className="border__line"></p>
              <p className="item__price">USD {this.state.item.price}.00</p>
            </div>
          </Col>
          <Col className="media__center2  media__center4" lg={4}>
            {images}
          </Col>
          <Col lg={4}>
            <div className="item__block ">
              <div>
                <p className="item__color">Color</p>
                <Colors data={this.state.item.color} />
              </div>
              <p className="border__line2"></p>
              <div>
                <p className="item__color">Sizes</p>

                <Sizes data={this.state.item.size} />
              </div>
              <p className="border__line2"></p>
              <a href="#">
                <p className="what__size">what is your size ?</p>
              </a>

              <button
                onClick={this.addToCart.bind(this)}
                className="bt__section  margin__buy"
              >
                Add to cart
              </button>
            </div>
          </Col>
          <OtherProduct />
          <Comments comm={this.state.item.comments} />
        </Row>
      );
    } else {
      item = null;
    }

    return <div>{this.state.preloader ? <Preloader /> : item}</div>;
  }
}

export default withRouter(
  connect(
    (state) => ({}),
    (dispatch) => ({
      incriment: (add) => {
        dispatch({ type: "SET_ADD", payload: add });
      },
    })
  )(SingleItem)
);
