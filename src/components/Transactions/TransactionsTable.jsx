import { useDispatch } from 'react-redux';
import { translateToEng } from 'hooks/useCategory';

import { TransactionTable } from './TransactionsTable.styled';

import { deleteTransaction } from '../../services/transactionsAPI';
import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
import { useState } from 'react';
import LightModalWindow from 'components/ModalWindow/LightModalWindow';

export const TransactionsTable = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const color = children[1];
  let minus = '-';
  if (color === 'green') {
    minus = false;
  }

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

  const sortedTransactions = children[0].slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });

  return (
    <>
      <TransactionTable>
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>SUM</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.slice(0).map(el => {
            const { _id, description, amount, date, category } = el;
            return (
              <tr key={_id} style={{ height: 40 }}>
                <td>{date.split('-').reverse().join('.')}</td>
                <td>{description}</td>
                <td>{translateToEng(category)}</td>
                <td style={{ color }}>
                  {minus} {amount.toFixed(2)}
                </td>
                <td>
                  <span
                    id={_id}
                    onClick={() => handleModalOpen(_id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <DeleteIcon />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TransactionTable>
      {modalOpen && (
        <LightModalWindow
          closeModal={handleModalClose}
          onDelete={handleDelete}
          text="SURE"
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};
