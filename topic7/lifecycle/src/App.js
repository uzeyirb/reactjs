
import './App.css';
import { MyApp } from './MyApp';
import {Component} from 'react';


class App extends Component {

constructor(){
  super()
this.state ={
  toggle: true
}
this.toggle = this.toggle.bind(this)

}

toggle (){
  this.setState({
    toggle: !this.state.toggle
  })
}



render(){

  return (
    <div className="App">
   {this.state.toggle ? <MyApp /> : <h1>MyApp itdi/Unmount oldu</h1>}
   <button onClick={this.toggle}>Toggle</button>
    </div>
  );
}
}

export default App;
