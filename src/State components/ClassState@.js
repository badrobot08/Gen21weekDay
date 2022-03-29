import React, { Component } from "react";

class ClassState1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrease = (e) => {
    e.preventDefault();

    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrease = (e) => {
    e.preventDefault();

    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <br />
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
        <br />
        <hr />
      </div>
    );
  }
}

export default ClassState1;
