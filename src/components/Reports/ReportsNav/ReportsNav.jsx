import ReportsSlider from 'components/Reports/ReportsSlider/ReportsSlider';
import {
  Balance,
  ButtonBack,
  ButtonBackText,
  Box,
  PreBox,
} from './ReportsNav.styled';
import reports from '../../../images/reportsFiles/reports.svg';

import { useLocation, useNavigate } from 'react-router-dom';

import ChangeBalance from 'components/ChangeBalance/ChangeBalance';

export const ReportsNav = () => {
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/home/expenses';

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const backLinkHref = () => navigate(from);

  return (
    <PreBox>
      <ButtonBack to={backLinkHref}>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Main page</ButtonBackText>
      </ButtonBack>
      <Box>
        <ReportsSlider />
        <Balance>
          <ChangeBalance />
        </Balance>
      </Box>
    </PreBox>
  );
};
