import React from "react";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 50, max: 150 },
    };
  }

  render() {
    return (
      <InputRange
        maxValue={300}
        minValue={0}
        value={this.state.value}
        onChange={(value) => this.setState({ value })}
      />
    );
  }
}

export default Range;
