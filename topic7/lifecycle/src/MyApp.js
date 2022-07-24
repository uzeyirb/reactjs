import { Component } from "react";

export class MyApp extends Component {
  constructor(props) {
    super(props);
    console.log("coming from constructor");

    this.state = {
      value: 0,
      bashqaValue: 0
    };
    this.changeValue = this.changeValue.bind(this)
    this.bashqachangeValue = this.bashqachangeValue.bind(this)
  }

  componentDidMount() {
    console.log("coming from componentDidMount");
  }

  componentDidUpdate() {
    console.log("coming from componentDidUpdate");
  }

  componentWillUnmount(){

    console.log("coming from componentWillUnmount");
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextState.bashqaValue === this.state.bashqaValue){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState){
  
    const nextPropsValue = Object.entries(nextProps);
    const nextStateValue = Object.entries(nextState);

    let wasChanged = false;

    for(let [key, value] of nextPropsValue){
      if(this.props[key] !== value){
        wasChanged = true;
        break;
      }
    }

    for(let [key, value] of nextStateValue){
     // console.log(key, value, this.state[key], this.state[key] !== value);
      if(this.state[key] !== value){
        wasChanged = true;
        break; 
      }
    }

    return wasChanged;
  }

  changeValue() {
    this.setState({
      value: Math.random(),
    });
  }
  bashqachangeValue() {
    this.setState({
      bashqaValue: Math.random(),
    });
  }

  render() {
    console.log("coming from render");
    return (
      <>
        <h1>changeValue {this.state.value}</h1>
        <h1>bashqachangeValue {this.state.bashqaValue}</h1>
        <button onClick={this.changeValue}>Click</button>
        <button onClick={this.bashqachangeValue}>BashqaClick</button>
      </>
    );
  }
}
