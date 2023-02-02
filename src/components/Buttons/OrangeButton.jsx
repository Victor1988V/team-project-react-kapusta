import { StyledOrangeButton } from './Buttons.styled';

export const OrangeButton = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
  onDelete,
}) => {
  const handleClick = () => {
    if (children === 'YES') {
      dispatch();
      closeModal();
    }
    if (changeBalance) {
      dispatch();
      closeModal();
    }
    if (children === 'SURE') {
      onDelete();
    }
  };

  return (
    <StyledOrangeButton onClick={handleClick}>{children}</StyledOrangeButton>
  );
};
