import React, { Component } from 'react';
import './App.css';
import Headr from './components/Headr';
import Test from './components/Test';
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Headr />
      // </div>
      <Switch>
        <Route exact path='/' component={Headr}/>
        <Route path='/Test' component={Test}/>
      </Switch>
    );
  }
}

