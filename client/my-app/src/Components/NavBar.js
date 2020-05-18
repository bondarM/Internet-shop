import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

class NavBar extends React.Component {
  componentDidMount() {
    console.log(this.props.auth);
  }

  render() {
    const userRoom = (
      <Nav.Link className="">
        <Link className="menu__cart" to="/userRoom">
          <FontAwesomeIcon
            className="p__fa"
            icon={faUserCog}
            size="1x"
            color="black"
          />
        </Link>
      </Nav.Link>
    );

    const cyrcle = <p className="cart__in">{this.props.count}</p>;

    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link className="logo__shop" to="/">
            L o g o
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="menu__a">
              <Link className="menu__li" to="/">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link className="menu__a">
              <Link className="menu__li" to="/items">
                Products
              </Link>
            </Nav.Link>

            <Nav.Link className="menu__a">
              <Link className="menu__li" to="/gallery">
                Gallery
              </Link>
            </Nav.Link>

            <Nav.Link className="menu__a">
              <Link className="menu__li" to="/contact">
                Contact use
              </Link>
            </Nav.Link>
            <Nav.Link className="menu__a">
              <Link className="menu__li" to="/login">
                Log in
              </Link>
            </Nav.Link>
            {this.props.auth ? userRoom : null}

            <Nav.Link className="">
              <Link className="menu__cart" to="/cart">
                <FontAwesomeIcon
                  className="p__fa"
                  icon={faShoppingCart}
                  size="1x"
                  color="black"
                />
                {this.props.count == 0 ? null : cyrcle}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(
  (state) => ({
    auth: state.auth.login,
    count: state.cart.count,
  }),
  (dispatch) => ({
    setLogin: (data) => {
      dispatch({ type: "SET_LOGIN", payload: data });
    },
    incriment: () => {
      dispatch({ type: "SET_ADD" });
    },
  })
)(NavBar);
