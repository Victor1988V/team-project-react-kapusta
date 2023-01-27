import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import * as authApi from 'services/authAPI';

//import * as authOperations from 'redux/auth/auth-operations';

// function Copyright(props) {
//   return (
//     <>
//       <Typography
//         variant="body2"
//         color="text.secondary"
//         align="center"
//         {...props}
//       >
//         {'Copyright © '}
//         {new Date().getFullYear()}
//         {' | Developed by '}
//         <Link
//           color="inherit"
//           href="https://github.com/AnnaTsepilova/goit-react-hw-08-phonebook"
//         >
//           <GithubLogo />
//         </Link>{' '}
//       </Typography>
//     </>
//   );
// }

export default function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

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

  const testLogin = async () => {
    dispatch(
      authApi.logIn({
        email: 'test123@email.com',
        password: '123123123123',
      })
    ).then(result => {
      console.log(result);
      //   if (result.type === 'auth/register/rejected') {
      //     return;
      //   }
    });
  };

  const testRegister = () => {
    dispatch(
      authApi.register({
        email: 'test123@email.com',
        password: '123123123123',
      })
    ).then(result => {
      console.log(result);
      //   if (result.type === 'auth/register/rejected') {
      //     return;
      //   }
    });
  };

  const testLogout = () => {
    dispatch(authApi.logOut()).then(result => {
      console.log(result);
    });
  };

  const testRefreshToken = () => {
    dispatch(authApi.refreshToken()).then(result => {
      console.log(result);
    });
  };

  //testLogin();
  //testRefreshToken();
  //testRegister();
  testLogout();

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);

  //     if (email === '' || password === '') {
  //       Notify.warning(`Please input your email and password`, {
  //         background: '#ef5350',
  //         fontSize: '16px',
  //         width: '350px',
  //       });
  //       return;
  //     }

  //     dispatch(
  //       authOperations.logIn({
  //         email: data.get('email'),
  //         password: data.get('password'),
  //       })
  //     ).then(result => {
  //       if (result.type === 'auth/register/rejected') {
  //         return;
  //       }
  //       reset();
  //     });
  //};

  return (
    <>
      <p>Login Page Test</p>
    </>
  );
}

// LogIn.propTypes = {
//   name: PropTypes.string,
//   email: PropTypes.string,
//   password: PropTypes.string,
// };
