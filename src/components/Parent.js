import { Component } from "react";
import Element from "./Element.js";
class Parent extends Component {
  render() {
    return (
      <div>
        <Element mess="Message from parent" />
      </div>
    );
  }
}

export default Parent;
