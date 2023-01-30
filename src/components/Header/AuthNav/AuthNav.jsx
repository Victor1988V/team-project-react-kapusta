import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn, selectUserId } from 'redux/selectors';
import { logOut } from 'services/authAPI';

import logoutImg from 'images/logout.svg';

import LightModalWindow from 'components/ModalWindow/LightModalWindow/LightModalWindow';

import {
  StyledAuthNav,
  StyledLoginLabel,
  StyledLoginName,
  StyledLogoutImg,
  StyledVerticalLine,
  StyledExitButton,
} from './AuthNav.styled';


export const AuthNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserId);

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
        <StyledAuthNav>
          <StyledLoginLabel>{userEmail[0].toUpperCase()}</StyledLoginLabel>
          <StyledLoginName>{userEmail}</StyledLoginName>
          <StyledLogoutImg
            src={logoutImg}
            alt="logout"
            onClick={handleModalOpen}
          />
          <StyledVerticalLine></StyledVerticalLine>
          <StyledExitButton type="button" onClick={handleModalOpen}>
            Exit
          </StyledExitButton>
        </StyledAuthNav>
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
