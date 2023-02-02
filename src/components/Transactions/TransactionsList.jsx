import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
import { selectTransactions } from 'redux/selectors';
import {
  ItemName,
  ItemNameCont,
  ItemDate,
  ItemDateCont,
  ItemStyled,
  ItemCategory,
  Sum,
  SumCont,
  StyledList,
} from './TransactionsList.styled';
import { deleteTransaction } from '../../services/transactionsAPI';
import { translateToEng } from 'hooks/useCategory';
// import { useState } from 'react';

export const TransactionsList = () => {
  const allTransactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  const sortedTransactions = allTransactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });

  const handleDelete = event => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  return (
    <StyledList className="container">
      {sortedTransactions.slice(0, 7).map(item => {
        const { _id, description, amount, date, category } = item;
        let color;
        let minus = false;
        if (category === 'З/П' || category === 'Доп. доход') {
          color = 'green';
        } else {
          color = 'red';
          minus = '-';
        }

        return (
          <ItemStyled key={_id}>
            <ItemNameCont>
              <ItemName>{description}</ItemName>
              <ItemDateCont>
                <ItemDate>{date}</ItemDate>
                <ItemCategory>{translateToEng(category)}</ItemCategory>
              </ItemDateCont>
            </ItemNameCont>
            <SumCont>
              <Sum style={{ color }} className="sum">
                {minus} {amount}.00
              </Sum>
              <span
                id={_id}
                onClick={handleDelete}
                style={{ cursor: 'pointer' }}
              >
                <DeleteIcon />
              </span>
            </SumCont>
          </ItemStyled>
        );
      })}
    </StyledList>
  );
};
