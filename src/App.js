import React, { Component } from 'react';

import './App.css';
import Headr from './components/Headr';
import SuperFooter from './components/SuperFooter';
import Footer from './components/Footer';
import HomeSection from './containers/HomeSection';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Headr /> */}
        <HomeSection />
        <SuperFooter />
        <Footer />
      </div>
    );
  }
}

