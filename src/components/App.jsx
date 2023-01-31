import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import * as authAPI from 'services/authAPI';
import { setAccessToken } from 'services/authSlice';
import { IncomePage } from 'page/IncomePage/IncomePage';
import { ThereIsNoSuchPage } from 'page/NoSuchPage/NoSuchPage';
import { HomePage } from 'page/HomePage/HomePage';
import { ExpensesPage } from 'page/ExpensesPage/ExpensesPage';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import LogInPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';
import ReportsPage from 'page/ReportsPage/ReportsPage';
import PrivateRoute from './PrivateRoute';
import { selectToken, selectIsFetchingCurrentUser } from './../redux/selectors';
import { useMatchMedia } from './../hooks/useMatchMedia';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isFetchingUser = useSelector(selectIsFetchingCurrentUser);
  const location = window.location;
  const urlSearchParams = new URLSearchParams(location.search);
  const accessToken = urlSearchParams.get('accessToken');

  useEffect(() => {
    if (accessToken) {
      authAPI.setAuthHeader(accessToken);
      dispatch(setAccessToken(accessToken));
      dispatch(authAPI.getAllUserInfo());
      if (location.pathname === '/') {
        location.pathname = '/kapusta/home';
        dispatch(authAPI.getAllUserInfo());
      }
    }
  }, [accessToken, dispatch, location]);
  //
  const { isMobile } = useMatchMedia();
  useEffect(() => {
    if (!token || token === 'null' || token === null) {
      return;
    }
    authAPI.setAuthHeader(token);
    dispatch(setAccessToken(token));
    dispatch(authAPI.getAllUserInfo());
  }, [dispatch, token]);

  return (
    !isFetchingUser && (
      <>
        <BrowserRouter basename="kapusta">
          {/* <ToastContainer /> */}
          <Routes>
            <Route path="/" element={<SharedLayouts />}>
              <Route path="/" element={<PrivateRoute />}>
                <Route index element={<Navigate to="/home" />} />
                {!isMobile && (
                  <>
                    <Route path="/home" element={<HomePage />}>
                      <Route index element={<Navigate to="/home/expenses" />} />
                      <Route path="income" element={<IncomePage />} />
                      <Route path="expenses" element={<ExpensesPage />} />
                    </Route>
                  </>
                )}
                {isMobile && (
                  <>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/income" element={<IncomePage />} />
                    <Route path="/expenses" element={<ExpensesPage />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                  </>
                )}
                <Route path="/reports" element={<ReportsPage />} />
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
        {/* <LightModalWindow>Are you sure?</LightModalWindow> */}
        {/* <Summary /> */}
        {/* <Form /> */}
        {/* <TransactionsList /> */}
      </>
    )
  );
};
