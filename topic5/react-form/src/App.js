import React, { Component } from "react";
import ReactForm from "./ReactForm";
import BootCard from "./BootCard"
import { Container } from "react-bootstrap";

class App extends Component {
constructor(){
super();


}



  render() {
    return (
      <div className="App bg-danger">
        <Container className="bg-warning">
        <ReactForm />
       <BootCard/>

        </Container>
       
      </div>
    );
  }
}

export default App;
