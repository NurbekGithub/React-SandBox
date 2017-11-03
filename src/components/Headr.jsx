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
import StartButton from './StartButton';
import TutorialLink from './TutorialLink';

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
            <div class="css-15fohsg">
              <StartButton />
              <TutorialLink />
            </div>
          </div>
        </div>
      </div>
    );
  }
}