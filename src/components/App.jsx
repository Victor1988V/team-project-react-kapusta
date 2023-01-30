import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import * as authAPI from 'services/authAPI';
import { setAccessToken } from 'services/authSlice';

import { IncomePage } from 'page/IncomePage/IncomePage';
import { Header } from './Header/Header';
import { ThereIsNoSuchPage } from 'page/NoSuchPage/NoSuchPage';
import { HomePage } from 'page/HomePage/HomePage';
import { ExpensesPage } from 'page/ExpensesPage/ExpensesPage';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import LogInPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';
import ReportsPage from 'page/ReportsPage/ReportsPage';

export const App = () => {
  const dispatch = useDispatch();
  const location = window.location;
  const urlSearchParams = new URLSearchParams(location.search);
  const accessToken = urlSearchParams.get('accessToken');

  useEffect(() => {
    if (accessToken) {
      dispatch(setAccessToken(accessToken));

      dispatch(authAPI.getAllUserInfo());
    }
  }, [accessToken]);

  return (
    <>
      {/* <Header />
      <HomePage />
      <ExpensesPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route path="/">
              {/*    <Route path="/" element={<div>PrivateRoute </div>}> */}
              <Route index element={<Navigate to="/home" />} />
              {/* {!isMobile && ( */}
              <>
                <Route path="/home" element={<HomePage />}>
                  <Route index element={<Navigate to="/home/expenses" />} />
                  <Route path="income" element={<IncomePage />} />
                  <Route path="expenses" element={<ExpensesPage />} />/{' '}
                </Route>
              </>
              {/* )} */}
              {/* {isMobile && (
              <>
                <Route path="/home" element={<HomePage />} />
                <Route path="/income" element={<IncomePage />} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </>
              )} */}
              <Route path="reports" element={<ReportsPage />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<LogInPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>

            <Route path="*" element={<ThereIsNoSuchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
