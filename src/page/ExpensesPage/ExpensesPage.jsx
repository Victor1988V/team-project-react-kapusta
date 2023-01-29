import React, { useEffect } from 'react';

import { ProductInputForm } from './../../components/ProductInputForm/ProductInputForm';
import { TransactionsList } from './../../components/TransactionsList/TransactionsList';
import { Wrapper } from './ExpensesPage.styled';
import { useMatchMedia } from './../../hooks/useMatchMedia';
import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectExpenses } from 'redux/selectors';
import {
  selectBalance,
  selectIsLoggedIn,
  selectExpenses,
} from './../../redux/selectors';
import { getExpense } from 'services/transactionsAPI';

export const ExpensesPage = () => {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const expenses = useSelector(selectExpenses);
  const color = 'red';
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) dispatch(getExpense());
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile ? (
        <ProductInputForm />
      ) : (
        <Wrapper>
          <ProductInputForm />
          <TransactionsList>
            {expenses}
            {color}
          </TransactionsList>
        </Wrapper>
      )}
    </>
  );
};
