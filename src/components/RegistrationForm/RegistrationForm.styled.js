import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledOrangeButton } from 'components/Buttons/Buttons.styled';

export const RegisterBtn = styled(StyledOrangeButton)`
  width: 116px;
  height: 44px;
  outline: none;

  filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;

export const LogInLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 0;

  width: 116px;
  height: 44px;

  vertical-align: middle;

  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  outline: none;

  font-family: inherit;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));

  color: #52555f;
  background-color: #f5f6fb;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ffffff;
    background-color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ffffff;
    background-color: #ff751d;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;
