import React, { Component } from 'react';
import AppBar from '../../components/Global/AppBar';
import NavBar from '../../components/Global/NavBar';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <AppBar />
        { children }
        <NavBar />
      </div>
    );
  }
}
