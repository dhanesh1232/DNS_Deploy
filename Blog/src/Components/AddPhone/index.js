import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./index.css";

export default class AddPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneName: "",
    };
  }

  componentDidMount() {
    // Side effect code can be placed here
  }

  startUpdatingData = async (e) => {
    e.preventDefault();
    console.log(this.state.phoneName);
    let { phoneName } = this.state;
    let url = `http://localhost:3002/get-product/api?productName=${phoneName}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  render() {
    return (
      <div className="page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add Phone</title>
          <meta
            name="Add Mobiles"
            content="Add Mobile data from any website using webscraping"
          />
        </Helmet>
        <form className="add-phone" onSubmit={this.startUpdatingData}>
          <input
            type="text"
            onChange={(e) => this.setState({ phoneName: e.target.value })}
            value={this.state.phoneName}
            className="add-phone-input"
            placeholder="Add Phone Data"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
