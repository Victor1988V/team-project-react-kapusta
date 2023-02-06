import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
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
import { useState, useEffect } from 'react';
import LightModalWindow from 'components/ModalWindow/LightModalWindow';
import { getAllUserInfo } from 'services/authAPI';

export const TransactionsList = () => {
  const allTransactions = useSelector(state => state.auth.transactions);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const sortedTransactions = allTransactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });

  useEffect(() => {
    dispatch(getAllUserInfo());
  }, [allTransactions, dispatch]);

  const handleModalOpen = id => {
    setModalOpen(true);
    setCurrentId(id);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleDelete = event => {
    dispatch(deleteTransaction(currentId));
    setCurrentId(null);
    setModalOpen(false);
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
                {minus} {amount.toFixed(2)}
              </Sum>
              <span
                id={_id}
                onClick={() => handleModalOpen(_id)}
                style={{ cursor: 'pointer' }}
              >
                <DeleteIcon />
              </span>
            </SumCont>
          </ItemStyled>
        );
      })}
      {modalOpen && (
        <LightModalWindow
          closeModal={handleModalClose}
          onDelete={handleDelete}
          text="SURE"
        >
          Are you sure?
        </LightModalWindow>
      )}
    </StyledList>
  );
};
