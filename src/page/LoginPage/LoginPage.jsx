import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import * as authApi from 'services/authAPI';
import * as transactionsAPI from 'services/transactionsAPI';
import { formToJSON } from 'axios';

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

  const testAddIncome = () => {
    dispatch(
      transactionsAPI.addIncome({
        description: 'Income adfsdfsdfsdf',
        amount: Math.ceil(Math.random() * 1000),
        date: '2023-01-07',
        category: 'З/П',
      })
    ).then(result => {
      console.log(result);
    });
  };

  const testAddExpense = () => {
    dispatch(
      transactionsAPI.addExpense({
        description: 'Expense adfsdfsdfsdf',
        amount: Math.ceil(Math.random() * 1000),
        date: '2023-01-07',
        category: 'Продукты',
      })
    ).then(result => {
      console.log(result);
    });
  };

  const testDeleteIncome = transactionId => {
    dispatch(transactionsAPI.deleteTransaction(transactionId)).then(result => {
      console.log(result);
    });
  };

  const testGetUserInfo = () => {
    dispatch(transactionsAPI.getAllUserInfo()).then(result => {
      console.log(result);
    });
  };

  const testGetIncome = () => {
    dispatch(transactionsAPI.getExpense()).then(result => {
      console.log(result);
    });
  };

  const testGetIncomeCategories = () => {
    dispatch(transactionsAPI.getIncomeCategories()).then(result => {
      console.log(result);
    });
  };

  const testGetExpenseCategories = () => {
    dispatch(transactionsAPI.getExpenseCategories()).then(result => {
      console.log(result);
    });
  };
  const testGetTransactionsByDate = () => {
    dispatch(transactionsAPI.getTransactionsByDate('2023-01')).then(result => {
      console.log(result);
    });
  };

  const testUpdateBalance = () => {
    dispatch(transactionsAPI.updateBalance(100000)).then(result => {
      console.log(result);
    });
  };

  //testLogin();
  //testAddExpense();
  //testAddIncome();
  //testGetIncome();
  //testDeleteIncome('63d3fc9adb7a81081404762d');
  //testGetIncomeCategories();
  //testGetExpenseCategories();
  //testGetTransactionsByDate();
  //testGetUserInfo();
  //testUpdateBalance();
  //testGetIncome();
  //testDeleteIncome();
  //testAddIncome();
  //testRefreshToken();
  //testRegister();
  //testLogout();

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
