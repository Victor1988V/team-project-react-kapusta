import React, { useEffect } from 'react';

import { ProductInputForm } from './../../components/ProductInputForm/ProductInputForm';
import { TransactionsTable } from '../../components/Transactions/TransactionsTable';
import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
} from './ExpensesPage.styled';
import { useMatchMedia } from './../../hooks/useMatchMedia';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBalance,
  selectIsLoggedIn,
  selectExpenses,
} from './../../redux/selectors';
import { getExpense } from 'services/transactionsAPI';
import { BackButton } from './../../components/Buttons/BackButton';
import Summary from './../../components/Summary/Summary';

export const ExpensesPage = () => {
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const expenses = useSelector(selectExpenses);
  const color = 'red';
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) dispatch(getExpense());
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
          <TransactionsTable>
            {expenses}
            {color}
          </TransactionsTable>
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
};
