import React from 'react';
import { Link } from 'react-router';

const Profil = () => (
  <div>
    <h1>Mein Profil:</h1>
    <Link to='/login'>Log in</Link>
    <Link to='/signup'>Sign up</Link>
  </div>
);

export default Profil;
