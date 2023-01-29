import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as authAPI from 'services/authAPI';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  AuthWrapper,
  AuthFormTextLeft,
  AuthFormLabel,
  AuthFormInput,
  ButtonsContainer,
} from 'components/LoginForm/LoginForm.styled';

import {
  LogInLink,
  RegisterBtn,
} from 'components/RegistrationForm/RegistrationForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      authAPI.register({
        email: data.get('email'),
        password: data.get('password'),
      })
    ).then(result => {
      if (result.type === 'auth/register/rejected') {
        return;
      }
      Notify.success('Your registration is successful', {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
      reset();
    });
  };

  return (
    <AuthWrapper>
      <AuthFormTextLeft>Please fill registration fields:</AuthFormTextLeft>
      <form onSubmit={handleSubmit} autoComplete="on">
        <AuthFormLabel htmlFor="logInEmail">
          {/* {emailDirty && emailError && (
              <span style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )} */}
          Email:
        </AuthFormLabel>
        <AuthFormInput
          // onBlur={}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="your@email.com"
          pattern="[A-Za-zA-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zA-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zA-Яа-яЁёЄєЇї]{2,4}$"
          title="Email may consist of letters, numbers and a mandatory character '@'"
          required
          id="logInEmail"
          autoComplete="email"
          value={email}
          autoFocus
        />
        {/* {emailDirty && emailError && (
            <div style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
              {emailError}{' '}
            </div>
          )} */}

        <AuthFormLabel htmlFor="logInPassword">
          {/* {passwordDirty && passwordError && (
                <span style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )} */}
          Password:
        </AuthFormLabel>
        <AuthFormInput
          onChange={handleChange}
          //   onBlur={blurHandler}
          //   onChange={passwordHandler}
          type="password"
          name="password"
          placeholder="Password"
          pattern="[0-9A-Za-zA-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
          title="The password can consist of at least 8 letters, numbers and symbols '!@#$%^&*'"
          required
          autoComplete="current-password"
          value={password}
        />
        {/* {passwordDirty && passwordError && (
              <div style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
                {passwordError}{' '}
              </div>
            )} */}
        <ButtonsContainer>
          <LogInLink to="/login">Log In</LogInLink>
          <RegisterBtn type="submit">Registration</RegisterBtn>
        </ButtonsContainer>
      </form>
    </AuthWrapper>
  );
};
