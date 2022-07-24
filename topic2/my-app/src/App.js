import React from "react";
import "./App.css";
import Box from "./Box";
import flowerImage from "./image/04711d__rose_topaz_hot_pink_40cm.jpeg"
import data from "./data.json"
import { Component1 } from "./components/Component1";

class App extends React.Component {
  render() {

    console.log("data", data);
    return <div className="App">
<p className="text-danger h1">test</p>


      <Component1 title="Bu Appden Gelir" />




      <Box data={data} title="Ruslan" age={25}>

      </Box>
      <img src={flowerImage}></img>
      
    </div>;
  }
}

export default App;
