import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as authAPI from 'services/authAPI';

import Name from 'images/union.svg';

import {
  AuthWrapper,
  GoogleInWrapper,
  AuthFormText,
  GoogleBtn,
  GoogleIcon,
  AuthFormTextLeft,
  ValidRow,
  LabelInputWrapper,
  RequiredStar,
  AuthFormLabel,
  AuthFormInput,
  ButtonsContainer,
  LogInBtn,
  RegisterLink,
  FormWrapper,
  TextWrapper,
  ImageKapusta,
  TextSmartFin,
  Wrap,
} from 'components/LoginForm/LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  /* eslint-disable-next-line */
  const [email, setEmail] = useState('');
  /* eslint-disable-next-line */
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  /* eslint-disable-next-line */
  const [emailInvalid, setEmailInvalid] = useState(false);
  /* eslint-disable-next-line */
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
      var pattern = new RegExp(event.target.pattern);
      if (!pattern.test(String(event.target.value).toLowerCase())) {
        setErrors(errors => {
          errors['email'] = 'Invalid email';
          return errors;
        });
        if (event.target.value === '') {
          setErrors(errors => {
            errors['email'] = 'This is a required field';
            return errors;
          });
        }
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
  };

  return (
    <Wrap>
      <TextWrapper>
        <ImageKapusta src={Name} alt="Kapusta" />
        <TextSmartFin>Smart Finance</TextSmartFin>
      </TextWrapper>
      <FormWrapper>
        <AuthWrapper>
          <GoogleInWrapper>
            <AuthFormText>
              You can log in with your Google Account:
            </AuthFormText>
            <GoogleBtn href="https://kapusta-backend.goit.global/auth/google">
              <GoogleIcon />
              Google
            </GoogleBtn>
          </GoogleInWrapper>
          <AuthFormTextLeft>
            Or log in using an email and password, after registering:
          </AuthFormTextLeft>
          <form onSubmit={handleSubmit} autoComplete="on">
            <LabelInputWrapper>
              <AuthFormLabel htmlFor="logInEmail">
                {errors['email'] && <RequiredStar>* </RequiredStar>}
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

              <ValidRow>
                <p style={{ color: '#EB5757', fontSize: 10 }}>
                  {errors['email']}{' '}
                </p>
              </ValidRow>
            </LabelInputWrapper>
            <LabelInputWrapper>
              <AuthFormLabel htmlFor="logInPassword">
                {errors['password'] && <RequiredStar>* </RequiredStar>}
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

              <ValidRow>
                {' '}
                <p style={{ color: '#EB5757', fontSize: 10 }}>
                  {errors['password']}{' '}
                </p>
              </ValidRow>
            </LabelInputWrapper>
            <ButtonsContainer>
              <LogInBtn type="submit">Log In</LogInBtn>
              <RegisterLink to="/register">Registration</RegisterLink>
            </ButtonsContainer>
          </form>
        </AuthWrapper>
      </FormWrapper>
    </Wrap>
  );
};
