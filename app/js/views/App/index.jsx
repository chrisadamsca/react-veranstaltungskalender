import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../../components/Global/AppBar';
import NavBar from '../../components/Global/NavBar';

const App = ({ children }) => (
  <MuiThemeProvider>
    <div className='App'>
      <AppBar />
      { children }
      <NavBar />
    </div>
  </MuiThemeProvider>
);


export default App;
