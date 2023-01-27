import { useLocation } from 'react-router';
import { ButtonBack } from './Buttons.styled';
import reports from '../../images/reportsFiles/reports.svg';

export const BackButton = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <ButtonBack to={backLink}>
      <svg width="24" height="24">
        <use href={`${reports}#icon-back`}></use>
      </svg>
    </ButtonBack>
  );
};
