import { Component } from "react";
import { Box } from "./Box";
import { Counter } from "./Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ruslan",
      open: false,
      product: [],
    };
    this.handleName = this.handleName.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleName(callBackName) {
    console.log("name", callBackName);
    console.log("salam", this);
    this.setState({ name: callBackName, open: true });
  }

  handleProduct() {
    this.setState({ product: [1, 2, 3] });
  }

  render() {
    console.log("render");
    console.log("data", this.state.product);

    return (
      <div className="App">
        <div>Salam {this.state.name}</div>
        <button onClick={() => this.handleName("Ruslan")}>deyis</button>
        <button onClick={this.handleProduct}>data geldi</button>
        <Box handleName={this.handleName} />
        <Counter />
      </div>
    );
  }
}
export default App;
