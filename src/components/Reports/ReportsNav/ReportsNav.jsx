import ReportsSlider from 'components/Reports/ReportsSlider/ReportsSlider';
import {
  Balance,
  ButtonBack,
  ButtonBackText,
  Box,
  PreBox,
} from './ReportsNav.styled';
import reports from '../../../images/reportsFiles/reports.svg';

import { useLocation } from 'react-router';

import ChangeBalance from 'components/ChangeBalance/ChangeBalance';

export const ReportsNav = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  //console.log('balance reports', balance);
  return (
    <PreBox>
      <ButtonBack to={backLinkHref}>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Go back</ButtonBackText>
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
