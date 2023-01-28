import React from 'react';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import {
  StyledModal,
  StyledBackdrop,
  StyledText,
  StyledTitle,
} from './DarkModalWindow.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

const DarkModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
    body.classList.remove('no-scroll');
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };

  useEffect(() => {
    body.classList.add('no-scroll');
    return () => body.classList.remove('no-scroll');
  }, []);

  return createPortal(
    isModalOpen && (
      <StyledBackdrop onClick={handleBackdropClick}>
        <StyledModal>
          <StyledTitle>
            Hello! To get started, enter the current balance of your account!
          </StyledTitle>
          <StyledText>You can't spend money until you have it :)</StyledText>
        </StyledModal>
      </StyledBackdrop>
    ),
    modalRoot
  );
};

export default DarkModalWindow;
