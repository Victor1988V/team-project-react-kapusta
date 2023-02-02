import React, { useEffect } from 'react';

import { ProductInputForm } from './../../components/ProductInputForm/ProductInputForm';
import { TransactionsTable } from '../../components/Transactions/TransactionsTable';
import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
} from './../ExpensesPage/ExpensesPage.styled';
import { useMatchMedia } from './../../hooks/useMatchMedia';
import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectExpenses } from 'redux/selectors';
import {
  selectBalance,
  selectIsLoggedIn,
  selectIncomes,
} from './../../redux/selectors';
import { getIncome } from 'services/transactionsAPI';

import { BackButton } from './../../components/Buttons/BackButton';
import Summary from './../../components/Summary/Summary';

const IncomePage = () => {
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const incomes = useSelector(selectIncomes);
  const color = 'green';
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) dispatch(getIncome());
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile && (
        <>
          <StyledBg />
          <BackButton />
        </>
      )}
      <StyledFrame>
        <ProductInputForm />
        <StyledTableAndSummaryDiv>
          {incomes.length > 0 && (
            <TransactionsTable>
              {incomes}
              {color}
            </TransactionsTable>
          )}
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
};

export default IncomePage;
