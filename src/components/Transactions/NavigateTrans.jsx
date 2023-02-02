import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledTabsMobile, StyledTabsDesktop } from './NavigateTrans.styled';

export const NavigateTransMob = () => {
  return (
    <StyledTabsMobile>
      <Link to="/expenses" className="TabMobile">
        expenses
      </Link>
      <Link to="/income" className="TabMobile">
        income
      </Link>
    </StyledTabsMobile>
  );
};

export const NavigateTransDesk = () => {
  return (
    <StyledTabsDesktop>
      <NavLink to="expenses" className="TabDesktop">
        expenses
      </NavLink>
      <NavLink to="income" className="TabDesktop">
        income
      </NavLink>
    </StyledTabsDesktop>
  );
};
