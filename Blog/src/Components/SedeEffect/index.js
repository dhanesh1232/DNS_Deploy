import React, { Component } from "react";

class SideEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  /*componentDidMount() {
    // Simulating an API call or any other side effect
    setTimeout(() => {
      console.log("Component mounted and side effect completed");
    }, 1000);
  }*/

  render() {
    return null;
  }
}

export default SideEffect;
