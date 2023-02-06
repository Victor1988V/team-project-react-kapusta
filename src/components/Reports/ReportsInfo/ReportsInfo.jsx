import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIncomeTotal, selectExpensesTotal } from 'redux/selectors';
import { filteredDataAction } from 'redux/reportsQuery/reportsQuerySlice';

import { ReportsList } from 'components/Reports/ReportsList/ReportsList';
import ButtonsNextPrev from 'components/Reports/ButtonPrev/ButtonPrev';
import { ReportsTable } from 'components/Reports/Table/ReportsTable';

import {
  List,
  Item,
  ItemText,
  ItemExpenses,
  ItemIncome,
  Nav,
  NavText,
  Box,
} from 'components/Reports/ReportsInfo/ReportsInfo.styled';

export const ReportsInfo = () => {
  const dispatch = useDispatch();
  const incomeTotal = useSelector(selectIncomeTotal);
  const expensesTotal = useSelector(selectExpensesTotal);
  const [budget, setBudget] = useState('expenses');

  const handleClick = () => {
    if (budget === 'expenses') {
      setBudget('income');
      dispatch(filteredDataAction([]));
      return;
    }
    setBudget('expenses');
    dispatch(filteredDataAction([]));
  };

  return (
    <div>
      <List>
        <Item>
          <ItemText>Expenses:</ItemText>
          <ItemExpenses>- {expensesTotal.toFixed(2) ?? 0}</ItemExpenses>
        </Item>
        <Item>
          <ItemText>Income:</ItemText>
          <ItemIncome>+ {incomeTotal.toFixed(2) ?? 0}</ItemIncome>
        </Item>
      </List>

      <Box>
        <Nav className="Privet">
          <ButtonsNextPrev onButtonClick={handleClick}>
            <NavText>{budget}</NavText>
          </ButtonsNextPrev>
        </Nav>

        <ReportsList onChange={budget}></ReportsList>
      </Box>

      <ReportsTable onChange={budget}></ReportsTable>
    </div>
  );
};
