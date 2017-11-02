import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Delete from 'material-ui/svg-icons/action/delete';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import { Link } from 'react-router-dom'
import './Headr.css'

export default class Headr extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="Headr">
        <AppBar
          title="React"
          iconClassNameLeft="muidocs-icon-action-home"
          iconElementLeft={<IconButton><Icon /></IconButton>}
          onLeftIconButtonTouchTap={() => this.setState({ open: !this.state.open })}
          iconElementRight={<FlatButton label="GitHub" />}
          style={{
            backgroundColor: '#20232a',
          }}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Menu>
          <Link to='/Table'>
            <MenuItem 
              primaryText="Docs"
              leftIcon={<RemoveRedEye />}
              onTouchTap={this.handleClose} />
          </ Link>
            <MenuItem primaryText="Tutorial" leftIcon={<PersonAdd />} onTouchTap={this.handleClose} />
            <MenuItem primaryText="Community" leftIcon={<ContentLink />} onTouchTap={this.handleClose} />
            <Divider />
            <MenuItem primaryText="Blog" leftIcon={<ContentCopy />} onTouchTap={this.handleClose} />
            <MenuItem primaryText="v16,0,0" leftIcon={<Download />} onTouchTap={this.handleClose} />
            <Divider />
            <MenuItem primaryText="GitHub" leftIcon={<Delete />} onTouchTap={this.handleClose} />
          </Menu>
        </Drawer>
        <div className="container-headr" >
          <div className="container" >
            <h1 class="css-159p4b7">React</h1>
            <p class="css-1s44ra">A JavaScript library for building user interfaces</p>
            <div class="css-19bbi3m css-1ve3nxt">
              <div class="css-px8qel">
                <a class="css-1053yfl" href="/docs/hello-world.html">
                  Get Started
                </a>
              </div>
              <div class="css-px8qel">
                <a class="css-13foh4g" href="/tutorial/tutorial.html">
                  Take the Tutorial
                <svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.53657 8.69699" class="css-b7q1rs"><path d="M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,0,0,1,.18254,8.697Z" fill="currentColor"></path></svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}