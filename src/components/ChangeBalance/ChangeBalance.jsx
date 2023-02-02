import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateBalance } from 'services/transactionsAPI';
import { selectBalance, selectIsLoading } from 'redux/selectors';

import LightModalWindow from 'components/ModalWindow/LightModalWindow/LightModalWindow';
import DarkModalWindow from 'components/ModalWindow/DarkModalWindow/DarkModalWindow';

import { ChangeBalanceForm } from 'components/ChangeBalance/ChangeBalance.styled';

const ChangeBalance = () => {
  const transactionBalance = useSelector(selectBalance);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();

  let newBalance;

  const handleSubmit = event => {
    event.preventDefault();
    newBalance = event.target.balance.value;
  };

  const handleChange = event => {
    newBalance = event.target.value;
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
          placeholder={`${transactionBalance}.00 UAH`}
          required
        />
        <button type="submit" className="btn" onClick={handleModalOpen}>
          Confirm
        </button>
      </ChangeBalanceForm>
      {/* {!totalBalance && <DarkModalWindow />} */}
      {isLoading === true && !transactionBalance && <DarkModalWindow />}
      {modalOpen && (
        <LightModalWindow
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={transactionBalance}
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};

export default ChangeBalance;
