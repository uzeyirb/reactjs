import React, { Component } from "react";
import axios from "axios";


/**
 Optional chaining (?.)
The optional chaining operator (?.) enables you to read the value of a 
property located deep within a chain of connected objects without having 
to check that each reference in the chain is valid
 */
export class JokesContainer extends Component {

constructor(){
    super();
    this.state = {
        jokes: [],
    };
}

componentDidMount(){
    this.getJokes()
}
  getJokes() {
    axios.get("https://icanhazdadjoke.com/search?limit=5", {
        headers:{
            Accept: "application/json"
        }
    }).then((res) => {
      console.log(res);
      this.setState({jokes: res.data.results});
    });
  }

  render() {
    return (
      <>
        {this.state.jokes.map(item => <li key={item.id}>{item.joke}</li>)}
      </>
    );
  }
}
