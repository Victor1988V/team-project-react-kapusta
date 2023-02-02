import { useSelector } from 'react-redux';

import {
  selectBalanceAuth,
} from 'redux/selectors';

import { useMatchMedia } from 'hooks/useMatchMedia';

import ReportsSlider from 'components/Reports/ReportsSlider/ReportsSlider';
import {
  BalanceText,
  BalanceAmount,
  Balance,
  ButtonBack,
  ButtonBackText,
  Box,
  PreBox,
} from './ReportsNav.styled';
import reports from '../../../images/reportsFiles/reports.svg';

import { useLocation, useNavigate } from 'react-router-dom';

import ChangeBalance from 'components/ChangeBalance/ChangeBalance';

export const ReportsNav = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/home/expenses';

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const backLinkHref = () => navigate(from);

  const totalBalance = useSelector(selectBalanceAuth);

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
          {isMobile && (
            <>
              <BalanceText>Balance:</BalanceText>
              <BalanceAmount>{totalBalance ?? 0}.00 UAH</BalanceAmount>
            </>
          )}
          {isTablet && (
            <>
              <BalanceText>Balance:</BalanceText>
              <BalanceAmount>{totalBalance ?? 0}.00 UAH</BalanceAmount>
            </>
          )}
          {isDesktop && <ChangeBalance />}
        </Balance>
      </Box>
    </PreBox>
  );
};
