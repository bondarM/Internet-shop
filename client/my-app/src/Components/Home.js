import React from "react";
import SectionProduct from "./SectionProduct";
import Header from "./Header";
import Preloader from "./Tools/Prelaoder";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preloder: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ preloder: false });
    }, 1500);
  }
  //this.props.history.push("/some/Path");
  render() {
    return (
      <div>
        {this.state.preloder ? <Preloader /> : null}
        <div className={this.state.preloder ? "op-0" : ""}>
          <Header />
          <SectionProduct />
        </div>
      </div>
    );
  }
}
export default Home;
