import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Range from "../Components/Tools/Range";
import { Link } from "react-router-dom";
import Sizes from "../Components/Tools/SizeInput";
import Colors from "../Components/Tools/CyrclesInput";
import OtherProduct from "./OtherProducts";
import { getItems } from "../Functions/items";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.mainUrl = "http://localhost:4000";
    this.idUrl = "/items/";
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    getItems()
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let name = this.state.items.map((el) => {
      return (
        <h1 className=" product__el__block ">
          <Link to={`${this.idUrl}${el.id}`}>
            <img
              className="item__img "
              src={`${this.mainUrl}/${el.urlProduct}`}
            />
          </Link>
          <Link className="product__el__name" to={`${this.idUrl}${el.id}`}>
            {el.name} <p className="product__el__price">{el.price} USD </p>
          </Link>
        </h1>
      );
    });

    let size = this.state.items.map((el) => {
      return el.sizeSide;
    });

    let color = this.state.items.map((el) => {
      return el.color;
    });

    return (
      <Container>
        <Row>
          <Col lg={3}>
            <div className="item__block">
              <div>
                <p className="item__color">Color</p>
                <div className="d-flex justify-content-center">
                  <Colors data={color} />
                </div>
              </div>
              <p className="border__line3"></p>
              <div>
                <p className="item__color">Sizes</p>
                <div className="d-flex block__size">
                  <Sizes data={size} />
                </div>
              </div>
              <p className="border__line3"></p>
              <a href="#">
                <p className="what__size">what is your size ?</p>
              </a>
              <Range />
              <div className="m_left">
                <button className="bt__section2  margin__buy">Filter</button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="ml-auto media__center2 media__center3">
            <div className="items__center media__center2">{name}</div>
          </Col>

          <Row>
            <OtherProduct />
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Products;
