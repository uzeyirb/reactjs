import { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    let newValue = this.state.counter;

    this.setState({ counter: newValue + 1 });
  }

  decrement() {
    this.setState({
      counter: this.state.counter <= 0 ? 0 : this.state.counter - 1,
    });
  }

  render() {
    return (
      <div >
        <button onClick={this.increment}>Incement</button>

        <h1>Count: {this.state.counter}</h1>

        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
