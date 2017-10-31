import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fullBlack} from 'material-ui/styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
      textColor: fullBlack,
    },
    appBar: {
      height: 50,
    },
  });

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root')
);

registerServiceWorker();
