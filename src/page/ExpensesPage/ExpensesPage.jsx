import React, { useEffect } from 'react';

import { ProductInputForm } from './../../components/ProductInputForm/ProductInputForm';
import { TransactionsList } from './../../components/TransactionsList/TransactionsList';
import { Wrapper } from './ExpensesPage.styled';
import { useMatchMedia } from './../../hooks/useMatchMedia';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectTransactions } from 'redux/selectors';
import { selectBalance } from './../../redux/selectors';
import { getExpense } from 'services/transactionsAPI';

export const ExpensesPage = () => {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const allExpenses = useSelector(selectTransactions);
  const color = 'red';
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) dispatch(getExpense());
    // do things after first render
  }, [dispatch, user, balance]);
  return (
    <>
      {isMobile ? (
        <ProductInputForm />
      ) : (
        <Wrapper>
          <ProductInputForm />
          <TransactionsList>
            {allExpenses}
            {color}
          </TransactionsList>
        </Wrapper>
      )}
    </>
  );
};
