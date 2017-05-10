import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './views/App';
import Events from './views/Events';
import Gruppen from './views/Gruppen';
import Profil from './views/Profil';
import '../sass/app.sass';


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute activeClassName='active' component={ Events } />
      <Route path='gruppen' activeClassName='active' component={ Gruppen } />
      <Route path='profil' activeClassName='active' component={ Profil } />
    </Route>
  </Router>,
  document.getElementById('app'),
);
