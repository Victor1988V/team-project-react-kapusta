import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  reportsQueryAction,
  filteredDataAction,
} from 'redux/reportsQuery/reportsQuerySlice';

import ButtonsPrev from 'components/Reports/ButtonPrev/ButtonPrev';
import { monthNames, getMonth, getYear } from './ReportsSliderData';

import { getTransactionsByDate } from 'services/transactionsAPI';

import { Wrapper, Text, ReportSliderTitle } from './ReportsSlider.styled';

const ReportsSlider = () => {
  const [monthNumber, setMonthNumber] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    setMonthNumber(getMonth());
    setMonth(monthNames[getMonth()]);
    setYear(getYear());
  }, []);

  useEffect(() => {
    setMonth(monthNames[monthNumber]);
    let monthString = '';

    if (monthNumber + 1 < 10) {
      monthString = '0' + (monthNumber + 1);
    } else {
      monthString = monthNumber + 1;
    }
    const query = `${year}-${monthString}`;
    if (query !== '-01') dispatch(getTransactionsByDate(query));
    dispatch(reportsQueryAction(`${year}-${monthString}`));
  }, [monthNumber, year, dispatch]);

  const handlerClick = name => {
    switch (name) {
      case 'decrement':
        dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber - 1);
        if (monthNumber === 0) {
          setMonthNumber(11);
          setYear(year - 1);
        }
        break;
      case 'increment':
        dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber + 1);
        if (monthNumber === 11) {
          setMonthNumber(0);
          setYear(year + 1);
        }
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <ReportSliderTitle>Current period:</ReportSliderTitle>
      <ButtonsPrev onButtonClick={handlerClick}>
        <Text>
          {month} {year}
        </Text>
      </ButtonsPrev>
    </Wrapper>
  );
};

export default ReportsSlider;
