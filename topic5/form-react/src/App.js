import React, { Component } from "react";

class App extends Component {
constructor(){
super();
this.state = {
  name: "",
  age: ""
}
this.inputNameRef = React.createRef();
this.inputAgeRef = React.createRef();

}

onSumbit = ()=> {

  let name = this.inputNameRef.current.value;
  let age= this.inputAgeRef.current.value;
  this.setState({name, age})
  console.log("inputName, inputAge", name, age);
}

  render() {
    return (
      <div className="App">
        <input ref={this.inputNameRef} placeholder="name" />
        <input ref={this.inputAgeRef} placeholder="age" />
        <button onClick = {()=> this.onSumbit()}>Send</button>
      </div>
    );
  }
}

export default App;
