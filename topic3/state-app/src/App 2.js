import { Component } from "react";
import "./App.css";
import { Box } from "./Box";
import  Counter  from "./Counter"

export class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Ixtiyar",
      open: false,
      product: [],
    };
this.handleName = this.handleName.bind(this)
this.handleProduct = this.handleProduct.bind(this)
  }

  handleName(name){
    console.log("name", name);
    this.setState({name:"Farid", open: true})
  }

  handleProduct(){
    this.setState({product: [1, 2, 3]})
  }


  render() {
   
    console.log("this.state.product", this.state.product);
    return (
      <div className="App">
      
        <h1> Salam {this.state.name}</h1>
        <button onClick={this.handleName}>Select</button>
        <button onClick={this.handleProduct}>Data Received</button>

        <Box handleName={this.handleName}/>
        <Counter/>
      </div>
    );
  }
}

export default App;
