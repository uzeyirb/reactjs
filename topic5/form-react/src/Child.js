import { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onComment("Cetin")}>Child gelen</button>
      </div>
    );
  }
}

export default Child;
