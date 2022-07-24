import { Component } from "react";
import TodoInput from "./TodoInput";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      todo: [],
    };
    this.addTodo = this.addTodo.bind(this)
  }


  addTodo(title) {
    this.setState({ todo: [...this.state.todo, title]});
  }
  

  render() {
    console.log(this.state);
    return (
      <div>
        <TodoInput add={this.addTodo}/>
      


        <br/>
        <br/>
        <br/>

        <ul>
{this.state.todo.map((item, index) => (<li key={`todo-item-${index}`}>
  {item}
</li>))}

        </ul>
      </div>
    );
  }
}

export default App;
