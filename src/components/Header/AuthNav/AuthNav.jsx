import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn, selectUserEmail } from 'redux/selectors';
import { logOut } from 'services/authAPI';

import logoutImg from 'images/logout.svg';

import LightModalWindow from 'components/ModalWindow/LightModalWindow/LightModalWindow';

import {
  AuthNavContainer,
  UserAvatar,
  UserEmail,
  LogoutImg,
  VerticalLine,
  ExitButton,
} from 'components/Header/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    isLoggedIn && (
      <>
        <AuthNavContainer>
          <UserAvatar>{userEmail[0].toUpperCase()}</UserAvatar>
          <UserEmail>{userEmail}</UserEmail>
          <LogoutImg src={logoutImg} alt="logout" onClick={handleModalOpen} />
          <VerticalLine></VerticalLine>
          <ExitButton type="button" onClick={handleModalOpen}>
            Exit
          </ExitButton>
        </AuthNavContainer>
        {modalOpen && (
          <LightModalWindow
            closeModal={handleModalClose}
            dispatch={handleClick}
          >
            Do you really want to leave?
          </LightModalWindow>
        )}
      </>
    )
  );
};
