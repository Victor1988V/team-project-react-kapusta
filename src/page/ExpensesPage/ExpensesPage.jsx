import React, { useEffect } from 'react';
// import { KapustaTab } from 'page/HomePage/HomePage.styled';
// import kapusta from 'images/kapustaTab.svg';
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

const ExpensesPage = () => {
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
          {expenses.length > 0 && (
            <TransactionsTable>
              {expenses}
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

export default ExpensesPage;
