import React, { Component } from "react";
import "./index.css";

export default class AddPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
    };
  }

  componentDidMount() {
    // Side effect code can be placed here
  }

  startUpdatingData = async (e) => {
    e.preventDefault();
    let { productName } = this.state;
    let url = `http://localhost:3002/api/add-products?product_name=${productName}`; // Include productName in the URL as a query parameter
    try {
      let res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <div className="page-container">
        <div className="control-page">
          <ul className="result-data">
          </ul>
          <form className="add-phone" onSubmit={this.startUpdatingData}>
            <input
              type="text"
              onChange={(e) => this.setState({ productName: e.target.value })}
              value={this.state.phoneName}
              className="add-phone-input"
              placeholder="Add Phone Data"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
