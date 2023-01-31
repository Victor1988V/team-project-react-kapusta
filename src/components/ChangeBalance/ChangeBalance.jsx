import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateBalance } from 'services/transactionsAPI';
import { getAllUserInfo } from 'services/authAPI';
import { selectIsLoggedIn, selectBalanceAuth } from 'redux/selectors';

import LightModalWindow from '../ModalWindow/LightModalWindow/LightModalWindow';
import DarkModalWindow from '../ModalWindow/DarkModalWindow/DarkModalWindow';

import { ChangeBalanceForm } from './ChangeBalance.styled';

const ChangeBalance = () => {
  const stateBalance = useSelector(state => state.transactions.balance);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const totalBalance = useSelector(selectBalanceAuth);
  const [newBalance, setNewBalance] = useState(0);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    setNewBalance(event.target.balance.value);
  };

  const handleChange = event => {
    setNewBalance(event.target.value);
  };

  const handleClick = () => {
    dispatch(updateBalance(newBalance));
    form.current.reset();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllUserInfo());
      setNewBalance(totalBalance);
    }
  }, [dispatch, isLoggedIn, totalBalance]);

  return (
    <>
      <ChangeBalanceForm onSubmit={handleSubmit} ref={form}>
        <h2 className="title">Balance:</h2>
        <input
          onChange={handleChange}
          className="inputTag"
          type="number"
          name="balance"
          title="Please, enter your balance"
          pattern="[0-9, .UAH]*"
          placeholder={`${newBalance}.00 UAH`}
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
