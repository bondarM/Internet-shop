import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./OthersPage/NotFound";
import Products from "./OthersPage/Product";
import LogIn from "./OthersPage/LogIn";
import SingleItem from "./Components/SingleItem";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import UserRoom from "./OthersPage/UserRoom";
import Cart from "./OthersPage/Cart";
import Register from "./OthersPage/Register";
import axios from "axios";
import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/cart")
      .then((res) => {
        this.props.incriment(res.data.cart.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Router>
          <Container fluid={true} className="body">
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/items">
                <Products />
              </Route>

              <Route exact path="/items/:id">
                <SingleItem />
              </Route>

              <Route exact path="/galler"></Route>

              <Route exact path="/contac"></Route>

              <Route exact path="/login">
                <LogIn />
              </Route>

              <Route exact path="/cart">
                <Cart />
              </Route>

              <Route exact path="/register">
                <Register />
              </Route>

              <Route exact path="/userRoom">
                <UserRoom />
              </Route>

              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </Container>
        </Router>
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
)(App);
