import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class BuyItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let priceSum = this.props.price.map((el) => {
      return el.item.price;
    });

    let sum = 0;
    for (let i = 0; i < priceSum.length; i++) {
      sum += priceSum[i];
    }

    let itemLength = this.props.price.map((el) => {
      return el.quantity;
    });

    let sumItem = 0;
    for (let i = 0; i < itemLength.length; i++) {
      sumItem += itemLength[i];
    }

    const delivery = 40;
    const total = delivery + sum;

    return (
      <Col lg={3} className="cart__block__buy ">
        <div className="item__block">
          <h1 className="cart__order">Order sumary</h1>
          <div className="d-flex cart__buy">
            <div className="cart__m__buy">
              <p> {sumItem} items</p>
              <p> Delivery fee</p>
              <h2 className="cart__total">Total cost</h2>
            </div>
            <div>
              <p> {sum}.00</p>
              <p> {delivery}.00</p>

              <h2 className="cart__total">{total}.00 USD</h2>
            </div>
          </div>
          <button className="bt__section3">Buy</button>
        </div>
      </Col>
    );
  }
}

export default BuyItem;
