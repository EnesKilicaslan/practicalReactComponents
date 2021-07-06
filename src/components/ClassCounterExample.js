import React, { Component } from "react";

export class ClassCounterExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  tick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {
    console.log("class component did mount");
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("class conponent did un mount");
    clearInterval(this.interval);
  }
  render() {
    return <div style={{ color: "blue" }}>{this.state.counter}</div>;
  }
}

export default ClassCounterExample;
