import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import monthNameTranslate from './SummaryMonthTranslate';

import {
  // selectIsLoading,
  selectIncomeSummary,
  selectExpensesSummary,
} from 'redux/selectors';

import {
  Table,
  Row,
  Month,
  TableTop,
  Value,
} from 'components/Summary/Summary.styled';

const Summary = () => {
  const location = useLocation();
  // const isLoading = useSelector(selectIsLoading);
  const incomeData = useSelector(selectIncomeSummary);
  const expensesData = useSelector(selectExpensesSummary);

  let data;

  if (location.pathname === '/home/income') {
    data = Object.entries(incomeData) ?? [];
  }

  if (location.pathname === '/home/expenses') {
    data = Object.entries(expensesData) ?? [];
  }

  return (
    // !isLoading && (
    <Table>
      <TableTop>SUMMARY</TableTop>
      {data?.map(item => {
        if (item[1] === 'N/A') {
          return false;
        } else {
          return (
            <Row key={`${item[0]}${item[1]}`}>
              <Month>{monthNameTranslate(item[0])}</Month>
              <Value>{item[1].toFixed(2)}</Value>
            </Row>
          );
        }
      })}
    </Table>
  );
  // );
};

export default Summary;
