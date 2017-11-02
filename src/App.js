import React, { Component } from 'react';

import './App.css';
import Headr from './components/Headr';
import Body from './components/Body';
import Table from './components/Table';
import FormSubmit from './components/FormSubmit';
import { Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Headr />
        <Switch>
          <Route path='/Table' component={Table}/>
          <Route path='/FormSubmit' component={FormSubmit}/>
        </Switch>
        <Body />
      </div>
    );
  }
}

