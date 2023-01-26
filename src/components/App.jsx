import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="kapusta">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<div>SharedLayouts </div>}>
            <Route path="/" element={<div>PrivateRoute </div>}>
              <Route index element={<Navigate to="/home" />} />
              {!isMobile && (
                <>
                  <Route path="/home" element={<div>HomePage</div>}>
                    <Route index element={<Navigate to="/home/expenses" />} />
                    <Route path="income" element={<div>IncomePage</div>} />
                    <Route path="expenses" element={<div>ExpensesPage</div>} />
                  </Route>
                </>
              )}
              {isMobile && (
                <>
                  <Route path="/home" element={<div>HomePage</div>} />
                  <Route path="/income" element={<div>IncomePage</div>} />
                  <Route path="/expenses" element={<div>ExpensesPage</div>} />
                  <Route path="*" element={<Navigate to="/home" />} />
                </>
              )}
              <Route path="/reports" element={<div>ReportsPage</div>} />
            </Route>
            <Route path="/" element={<div>PublicRoute</div>}>
              <Route path="/login" element={<div>LoginPage</div>} />
              <Route path="/register" element={<div>RegiserPage</div>} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>

            <Route path="*" element={<div>ThereIsNoSuchPage</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
