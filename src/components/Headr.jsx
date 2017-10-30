import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Headr extends Component {
  render() {
    return (
      <div className="Headr">
        <AppBar
          title="React"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}