import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//import { Header } from './Header/Header';
//import { HomePage } from '../page/HomePage/HomePage';
import { ExpensesPage } from './../page/ExpensesPage/ExpensesPage';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import LogInPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <>
      {/* <Header />
      <HomePage />
      <ExpensesPage /> */}
      <BrowserRouter basename="kapusta">
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/">
            {/* <Route path="/" element={<div>SharedLayouts </div>}> */}
            <Route path="/">
              {/*    <Route path="/" element={<div>PrivateRoute </div>}> */}
              <Route index element={<Navigate to="/home" />} />
              {/* {!isMobile && ( */}
              <>
                <Route path="/home" element={<div>HomePage</div>}>
                  <Route index element={<Navigate to="/home/expenses" />} />
                  <Route path="income" element={<div>IncomePage</div>} />
                  <Route path="expenses" element={<ExpensesPage />} />/{' '}
                </Route>
              </>
              {/* )} */}
              {/* {isMobile && ( */}
              <>
                <Route path="/home" element={<div>HomePage</div>} />
                <Route path="/income" element={<div>IncomePage</div>} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </>
              {/* )} */}
              <Route path="/reports" element={<div>ReportsPage</div>} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<LogInPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>

            <Route path="*" element={<div>ThereIsNoSuchPage</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
