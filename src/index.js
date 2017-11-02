import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey800} from 'material-ui/styles/colors';
import { BrowserRouter } from 'react-router-dom';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
      textColor: grey800,
    },
    appBar: {
      height: 59,
    },
  });

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </MuiThemeProvider>
  , document.getElementById('root')
);

registerServiceWorker();
