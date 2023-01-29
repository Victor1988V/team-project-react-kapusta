import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateBalance } from '../../services/transactionsAPI';

import LightModalWindow from '../ModalWindow/LightModalWindow/LightModalWindow';
import DarkModalWindow from '../ModalWindow/DarkModalWindow/DarkModalWindow';

import { ChangeBalanceForm } from './ChangeBalance.styled';

const ChangeBalance = () => {
  const stateBalance = useSelector(state => state.transactions.balance);

  console.log(stateBalance);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  let newBalance;
  const form = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    newBalance = evt.target.balance.value;
  };

  const handleClick = () => {
    dispatch(updateBalance({ balance: newBalance }));
    form.current.reset();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ChangeBalanceForm onSubmit={handleSubmit} ref={form}>
        <h2 className="title">Balance:</h2>
        <input
          className="inputTag"
          type="number"
          name="balance"
          title="Please, enter your balance"
          pattern="[0-9, .UAH]*"
          placeholder={`${stateBalance}.00 UAH`}
          required
        />
        <button type="submit" className="btn" onClick={handleModalOpen}>
          Confirm
        </button>
        {!stateBalance && <DarkModalWindow />}
      </ChangeBalanceForm>
      {modalOpen && (
        <LightModalWindow
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          // balance={balance}
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};

export default ChangeBalance;
