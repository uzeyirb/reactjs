import { Component } from "react";

export default class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state={
        title:"",
    }
  }  
  handleText(text) {
   
    this.setState ({ title: text });
    
  }

  parentUcunMethod(){
    this.props.add(this.state.title);
    this.setState({title: ""})
  }
 
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input
          placeholder="todo"
          value={this.state.title}
          onChange={(e) => this.handleText(e.target.value)}
        />
          <button onClick={()=> this.parentUcunMethod()}>Add</button>
      </div>
    );
  }
}
