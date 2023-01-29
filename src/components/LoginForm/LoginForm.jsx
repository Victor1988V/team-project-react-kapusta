import { useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import * as authAPI from 'services/authAPI';

import {
  AuthWrapper,
  GoogleInWrapper,
  AuthFormText,
  GoogleBtn,
  GoogleIcon,
  AuthFormTextLeft,
  AuthFormLabel,
  AuthFormInput,
  ButtonsContainer,
  LogInBtn,
  RegisterLink,
} from 'components/LoginForm/LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;
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
    handleValidation(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleValidation(event);
    const data = new FormData(event.currentTarget);

    dispatch(
      authAPI.logIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    ).then(result => {
      if (result.type === 'auth/register/rejected') {
        return;
      }
      reset();
    });
  };

  const handleValidation = event => {
    //Email
    if (event.target.name === 'email') {
      console.log(event.target.pattern);
      if (event.target.value === '') {
        setErrors(errors => {
          errors['email'] = 'This is a required field';
          return errors;
        });
        setEmailInvalid(true);
      } else {
        setErrors(errors => {
          errors['email'] = '';
          return errors;
        });
      }
    }

    //Password
    if (event.target.name === 'password') {
      if (event.target.value.length < 8) {
        setErrors(errors => {
          errors['password'] = 'Password must be at least 8 characters';
          return errors;
        });
        if (!event.target.value) {
          setErrors(errors => {
            errors['password'] = 'This is a required field';
            return errors;
          });
        }
        setPasswordInvalid(true);
      } else {
        setErrors(errors => {
          errors['password'] = '';
          return errors;
        });
      }
    }
    setErrors(errors => {
      console.log(errors);
      return errors;
    });
  };

  return (
    <AuthWrapper>
      <GoogleInWrapper>
        <AuthFormText>You can log in with your Google Account:</AuthFormText>
        <GoogleBtn type="button">
          <GoogleIcon />
          Google
        </GoogleBtn>
      </GoogleInWrapper>
      <AuthFormTextLeft>
        Or log in using an email and password, after registering:
      </AuthFormTextLeft>
      <form onSubmit={handleSubmit} autoComplete="on">
        <AuthFormLabel htmlFor="logInEmail">
          {errors['email'] && (
            <span
              style={{
                color: '#EB5757',
                fontSize: 14,
                fontWeight: 'bolder',
                paddingTop: 4,
              }}
            >
              *
            </span>
          )}
          Email:
        </AuthFormLabel>
        <AuthFormInput
          onChange={handleChange}
          onBlur={handleValidation}
          type="email"
          name="email"
          placeholder="your@email.com"
          pattern="[A-Za-zA-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zA-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zA-Яа-яЁёЄєЇї]{2,4}$"
          title="Email may consist of letters, numbers and a mandatory character '@'"
          required
          id="logInEmail"
          autoComplete="email"
          autoFocus
        />

        <p style={{ color: '#EB5757', fontSize: 10, marginTop: 4 }}>
          {errors['email']}{' '}
        </p>

        <AuthFormLabel htmlFor="logInPassword">
          {errors['password'] && (
            <span
              style={{
                color: '#EB5757',
                fontSize: 14,
                fontWeight: 'bolder',
                paddingTop: 4,
              }}
            >
              *
            </span>
          )}
          Password:
        </AuthFormLabel>
        <AuthFormInput
          onChange={handleChange}
          onBlur={handleValidation}
          type="password"
          name="password"
          placeholder="Password"
          pattern="[0-9A-Za-zA-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
          title="The password can consist of at least 8 letters, numbers and symbols '!@#$%^&*'"
          required
          autoComplete="current-password"
        />

        <p style={{ color: '#EB5757', fontSize: 10, marginTop: 4 }}>
          {errors['password']}{' '}
        </p>

        <ButtonsContainer>
          <LogInBtn type="submit">Log In</LogInBtn>
          <RegisterLink to="/register">Registration</RegisterLink>
        </ButtonsContainer>
      </form>
    </AuthWrapper>
  );
};
