import { createPortal } from 'react-dom';
import {
  StyledModal,
  StyledContent,
  StyledText,
  StyledWrap,
  StyledClose,
  StyledBackdrop,
} from './LightModalWindow.styled';
import { OrangeButton } from '../../Buttons/OrangeButton';
import { WhiteButton } from '../../Buttons/WhiteButton';
import close from '../../../images/close.svg';
import { useEffect } from 'react';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const LightModalWindow = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
}) => {
  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  return createPortal(
    <StyledBackdrop onClick={handleBackdropClose}>
      <StyledModal>
        <StyledClose onClick={closeModal}>
          <img src={close} alt="close" />
        </StyledClose>
        <StyledContent>
          <StyledText>{children}</StyledText>
          <StyledWrap>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
            >
              {text ? text : 'YES'}
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </StyledWrap>
        </StyledContent>
      </StyledModal>
    </StyledBackdrop>,
    modalRoot
  );
};
