import { AuthNav } from 'components/Header/AuthNav/AuthNav';

import { Link } from 'react-router-dom';
import logo from 'images/logo.svg';
import { StyledHeader } from 'components/Header/Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <AuthNav />
    </StyledHeader>
  );
};
