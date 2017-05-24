import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user }) => (
    <div className='container'>
      <form action='/' onSubmit={ onSubmit }>
        <h2 className='card-heading'>Login</h2>

        {errors.summary && <p className='error-message'>{errors.summary}</p>}

        <div className='field-line'>
          <label htmlFor='email'>E-Mail</label>
          <input
            name='email'
            onChange={ onChange }
            value={ user.email }
          />
        </div>

        <div className='field-line'>
          <label htmlFor='password'>Passwort</label>
          <input
            type='password'
            name='password'
            onChange={ onChange }
            value={ user.password }
          />
        </div>

        <div className='button-line'>
          <button type='submit' label='Log in'>Einloggen</button>
        </div>

        <p>Du hast noch keinen Account? <Link to={ '/signup' }>Registrieren</Link>.</p>
      </form>
    </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default LoginForm;
