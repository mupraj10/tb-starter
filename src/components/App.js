import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className='section'> {"something here" }</div>

      // <div className="container">
        // {"something here"}
        // <Router>
        //   <Switch>
          
        //   </Switch>
        // </Router>
      // </div>
    );
  }
}

export default App;
