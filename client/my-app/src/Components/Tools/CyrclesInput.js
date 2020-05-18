import React from "react";
class Cyrcles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.data[0],
    };
    this.coincidence = {
      red: "red-input circle_input",
      black: "black_input circle_input",
      grey: "grey_color circle_input",
      green: " green_color circle_input",
      orange: "orange_color circle_input",
      blue: "blue_color circle_input",
    };
  }

  handleInput(e) {
    if (e.target.attributes["value"].value) {
      this.setState({ active: e.target.attributes["value"].value });
    }
  }

  render() {
    const content = this.props.data.map((el, i) => {
      return (
        <a
          key={i}
          className="d-flex m_color"
          href="#"
          onClick={this.handleInput.bind(this)}
          value={el}
        >
          <p
            value={el}
            className={`${this.coincidence[el]} ${
              this.state.active == el
                ? el == "black"
                  ? "borderColorSelectWhite"
                  : "borderColorSelect"
                : ""
            }`}
          ></p>
        </a>
      );
    });
    return <div className="d-flex justify-content-center">{content}</div>;
  }
}

export default Cyrcles;
