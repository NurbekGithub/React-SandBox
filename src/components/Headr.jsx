import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default class Headr extends Component {
  render() {
    return (
      <div className="Headr">
        <AppBar
          title="React"
          iconClassNameLeft="muidocs-icon-action-home"
          iconElementLeft={
            <div>
                <FlatButton label="Docs" />
                <FlatButton label="Tutorial" />
                <FlatButton label="Community" />
                <FlatButton label="Blog" />
            </div>}

          iconElementRight={<FlatButton label="GitHub" />}
        />
        <div className="container" />
      </div>
    );
  }
}