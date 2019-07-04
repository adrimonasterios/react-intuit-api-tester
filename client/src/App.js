import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Callback from './Callback'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/callback" component={Callback}/>
      </Router>
    )
  }
}

export default App
