import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './views/App';
import Events from './views/Events';
import Gruppen from './views/Gruppen';
import Profil from './views/Profil';
import Login from './views/Login';
import SignUp from './views/SignUp';
import '../sass/app.sass';
import Auth from './modules/Auth';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Events } />
      <Route path='gruppen' component={ Gruppen } />
      <Route path='profil' component={ Profil } />
      <Route path='login' component={ Login } />
      <Route path='signup' component={ SignUp } />
    </Route>
  </Router>,
  document.getElementById('app'),
);
