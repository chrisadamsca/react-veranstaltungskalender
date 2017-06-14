import App from './views/App';
import Events from './views/Events';
import Gruppen from './views/Gruppen';
import Profil from './views/Profil';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Auth from './modules/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Events);
        } else {
          callback(null, Events);
        }
      }
    },

    {
      path: '/gruppen',
      component: Gruppen
    },

    {
      path: '/profil',
      component: Profil
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/signup',
      component: SignUp
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
