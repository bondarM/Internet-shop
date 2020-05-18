import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faShareAlt } from "@fortawesome/free-solid-svg-icons";

class QuickBuy extends React.Component {
  render() {
    return (
      <div className="block__cart__other">
        <div className="block__cart__img">
          <FontAwesomeIcon
            className="p__fa"
            icon={faShoppingBag}
            size="2x"
            color="white"
          />
        </div>
        <div className="block__cart__view">Quick view</div>
        <div className="block__cart__share">
          <FontAwesomeIcon
            className="p__fa"
            icon={faShareAlt}
            size="2x"
            color="white"
          />
        </div>
      </div>
    );
  }
}
export default QuickBuy;
