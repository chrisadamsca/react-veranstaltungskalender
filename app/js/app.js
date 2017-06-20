import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import '../sass/app.sass';

ReactDOM.render((
  <Router history={ browserHistory } routes={ routes } />
), document.getElementById('app'));
