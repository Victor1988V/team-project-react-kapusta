import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import * as authAPI from 'services/authAPI';
import { lazy } from 'react';
import { setAccessToken } from 'services/authSlice';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';
import PrivateRoute from './PrivateRoute';
import { selectToken, selectIsFetchingCurrentUser } from './../redux/selectors';
import { useMatchMedia } from './../hooks/useMatchMedia';

const LogInPage = lazy(() => import('page/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('page/RegisterPage/RegisterPage'));
const HomePage = lazy(() => import('page/HomePage/HomePage'));
const ThereIsNoSuchPage = lazy(() => import('page/NoSuchPage/NoSuchPage'));
const ExpensesPage = lazy(() => import('page/ExpensesPage/ExpensesPage'));
const IncomePage = lazy(() => import('page/IncomePage/IncomePage'));
const ReportsPage = lazy(() => import('page/ReportsPage/ReportsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isFetchingUser = useSelector(selectIsFetchingCurrentUser);
  const location = window.location;
  const urlSearchParams = new URLSearchParams(location.search);
  const accessToken = urlSearchParams.get('accessToken');

  useEffect(() => {
    if (!token) {
      return;
    }
    // console.log(token);

    dispatch(authAPI.refreshToken());

    // authAPI.setAuthHeader(token);
    // dispatch(setAccessToken(token));
    // dispatch(authAPI.getAllUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    // if (!accessToken) {
    //   return;
    // }
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

  return (
    !isFetchingUser && (
      <>
        <BrowserRouter basename="team-project-react-kapusta">
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<SharedLayouts />}>
              <Route path="/" element={<PublicRoute />}>
                <Route path="/login" element={<LogInPage />} />
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="*" element={<Navigate to="/login" />} /> */}
              </Route>
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
