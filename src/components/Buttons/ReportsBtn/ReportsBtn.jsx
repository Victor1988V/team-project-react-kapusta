import React from 'react';
import { useLocation } from 'react-router';
import { ReactComponent as Reports } from './reports.svg';
import { StyledReportsBtn } from './ReportsBtn.styled';

const ReportsBtn = () => {
  const location = useLocation();
  return (
    <StyledReportsBtn to="/reports" state={{ from: location }}>
      <span>Reports</span>
      <Reports />
    </StyledReportsBtn>
  );
};

export default ReportsBtn;