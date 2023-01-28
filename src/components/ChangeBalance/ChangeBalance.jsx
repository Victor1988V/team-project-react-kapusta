import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

import { updateBalance } from '../../redux/transactions/operations';

import { LightModalWindow } from '../ModalWindow/LightModalWindow/LightModalWindow';
import { DarkModalWindow } from '../ModalWindow/DarkModalWindow/DarkModalWindow';

import { ChangeBalanceForm } from './ChangeBalance.styled';
import { WhiteButton } from './../Buttons/WhiteButton';

export const ChangeBalance = () => {
  const stateBalance = useSelector(state => state.transactions.newBalance);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  let balance;
  const form = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    balance = evt.target.balance.value;
  };

  const handleClick = () => {
    dispatch(updateBalance({ newBalance: balance }));
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
        <WhiteButton type="submit" onClick={handleModalOpen}>
          Confirm
        </WhiteButton>
        {!stateBalance && <DarkModalWindow />}
      </ChangeBalanceForm>

      {modalOpen && (
        <LightModalWindow
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={balance}
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};