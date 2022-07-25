import React, { Suspense, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RootPage from "./pages/RootPage";

import "./style/App.css";



class App extends Component {
render(){
  return (
    <React.StrictMode>
      <Router> 
        <Suspense fallback={<div>Loading...</div>}>
          <RootPage />
        </Suspense>
      </Router>
    </React.StrictMode>
  );
}
}

export default App;
