import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateBalance } from 'services/transactionsAPI';
import { getAllUserInfo } from 'services/authAPI';
import {
  selectIsLoggedIn,
  selectBalanceAuth,
  selectBalance,
  selectIsLoading,
} from 'redux/selectors';

import LightModalWindow from 'components/ModalWindow/LightModalWindow/LightModalWindow';
import DarkModalWindow from 'components/ModalWindow/DarkModalWindow/DarkModalWindow';

import { ChangeBalanceForm } from 'components/ChangeBalance/ChangeBalance.styled';

const ChangeBalance = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const totalBalance = useSelector(selectBalanceAuth);
  const transactionBalance = useSelector(selectBalance);
  const isLoading = useSelector(selectIsLoading);
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
    if (transactionBalance) {
      setNewBalance(transactionBalance);
    }
  }, [transactionBalance]);

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
      </ChangeBalanceForm>
      {/* {!totalBalance && <DarkModalWindow />} */}
      {isLoading === true && !totalBalance && <DarkModalWindow />}
      {modalOpen && (
        <LightModalWindow
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={newBalance}
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};

export default ChangeBalance;
