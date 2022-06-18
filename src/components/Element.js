import { Component } from "react";

class Element extends Component {
  render() {
    return <div>"Message passed to child : {this.props.mess}"</div>;
  }
}

export default Element;
