import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateBalance } from 'services/transactionsAPI';

import LightModalWindow from '../ModalWindow/LightModalWindow/LightModalWindow';
import DarkModalWindow from '../ModalWindow/DarkModalWindow/DarkModalWindow';

import { ChangeBalanceForm } from './ChangeBalance.styled';
import { selectBalance } from 'redux/selectors';

const ChangeBalance = () => {
  // console.log(stateBalance);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const stateBalance = useSelector(selectBalance);
  let newBalance;
  const form = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    newBalance = evt.target.balance.value;
    console.log(newBalance);
  };

  const handleClick = () => {
    dispatch(updateBalance(newBalance));
    console.log(stateBalance);
    form.current.reset();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  console.log(newBalance);
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
          balance={stateBalance}
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};

export default ChangeBalance;
