import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsLoggedIn,
  selectBalanceAuth,
  selectBalance,
} from 'redux/selectors';

import ReportsSlider from 'components/Reports/ReportsSlider/ReportsSlider';
import {
  BalanceText,
  BalanceAmounth,
  ButtonConfirm,
  Balance,
  ButtonBack,
  ButtonBackText,
  Box,
  PreBox,
} from './ReportsNav.styled';
import reports from '../../../images/reportsFiles/reports.svg';

import { useLocation, useNavigate } from 'react-router-dom';

// import ChangeBalance from 'components/ChangeBalance/ChangeBalance';

export const ReportsNav = () => {
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/home/expenses';

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const backLinkHref = () => navigate(from);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const totalBalance = useSelector(selectBalanceAuth);
  const transactionBalance = useSelector(selectBalance);
  const [newBalance, setNewBalance] = useState(0);
  const dispatch = useDispatch();

    useEffect(() => {
      if (transactionBalance) {
        setNewBalance(transactionBalance);
      }
    }, [transactionBalance]);

    useEffect(() => {
      if (isLoggedIn) {
        setNewBalance(totalBalance);
      }
    }, [dispatch, isLoggedIn, totalBalance]);

  return (
    <PreBox>
      <ButtonBack to={backLinkHref}>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Main page</ButtonBackText>
      </ButtonBack>
      <Box>
        <ReportsSlider />
        <Balance>
          {/* <ChangeBalance /> */}
          <BalanceText>Balance:</BalanceText>
          <BalanceAmounth>{newBalance ?? 0}.00 UAH</BalanceAmounth>
          <ButtonConfirm type="button">Confirm</ButtonConfirm>
        </Balance>
      </Box>
    </PreBox>
  );
};
