import React from "react";
class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.data[0],
    };
    this.fontweight = {
      s: "weight",
      m: "weight",
      L: "weight",
      xl: "weight",
    };
  }

  getWeight(e) {
    if (e.target.attributes["value"].value) {
      this.setState({ active: e.target.attributes["value"].value });
    }
  }

  render() {
    const size = this.props.data.map((el, i) => {
      return (
        <a href="#" key={i} value={el} onClick={this.getWeight.bind(this)}>
          <p
            value={el}
            className={`${"m_size"} ${this.state.active == el ? "weight" : ""}`}
          >
            {el}
          </p>
        </a>
      );
    });

    return <div className="d-flex block__size">{size}</div>;
  }
}

export default Sizes;
