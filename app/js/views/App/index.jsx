import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../../components/Global/AppBar';
import NavBar from '../../components/Global/NavBar';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider>
        <div className='App'>
          <AppBar />
          { children }
          <NavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}
