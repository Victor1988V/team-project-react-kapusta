import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledOrangeButton } from 'components/Buttons/Buttons.styled';

import { ReactComponent as GoogleLogo } from 'images/googleLogo.svg';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    margin-top: 117px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const AuthWrapper = styled.div`
  ${'' /* margin: 0 auto; */}
  align-items: center;

  width: 280px;
  padding: 40px 20px;

  background-color: #fff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 426px;
    padding: 56px 84px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 91px;
  }
`;

export const GoogleInWrapper = styled.div`
  width: 222px;
  margin: 0 auto 32px auto;

  @media screen and (min-width: 768px) {
    width: 248px;
  }
`;

export const AuthFormText = styled.p`
  margin: 0 auto 16px auto;
  text-align: center;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const AuthFormTextLeft = styled(AuthFormText)`
  text-align: left;

  @media screen and (min-width: 768px) {
    width: 250px;
    margin: 0 0 20px 0;
  }
`;

export const GoogleBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 10px 0;
  width: 122px;

  outline: none;
  border: none;
  border-radius: 26px;
  background-color: #f6f7fb;

  color: #000000;

  text-align: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;

  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));

  transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
`;

export const GoogleIcon = styled(GoogleLogo)`
  margin-right: 10px;
`;

export const LabelInputWrapper = styled.div`
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const AuthFormLabel = styled.label`
  display: block;

  padding-bottom: 12px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16;
  }
`;

export const RequiredStar = styled.span`
  color: #eb5757;
  font-size: 10px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const AuthFormInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 17px 19px;

  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #f6f7fb;

  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: #52555f;

  ::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
`;

export const ValidRow = styled.div`
  height: 12px;
  margin-top: 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 8px;
`;

export const LogInBtn = styled(StyledOrangeButton)`
  width: 116px;
  height: 44px;
  outline: none;

  filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;

export const RegisterLink = styled(NavLink)`
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

export const TextWrapper = styled.div`
/* outline: 1px solid tomato; */

  /* z-index: 2; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 86px;
  margin-bottom: 50px;
  padding-right: 80px;
  @media screen and (min-width: 768px) {
    margin: 80px 100px 80px 0;
    padding: 0;
    /* outline: 1px solid tomato; */
  }
  @media screen and (min-width: 1280px) {
    /* margin: 0px; */
    /* padding-right: 115px; */
    margin: 308px 157px 98px 229px;
    padding: 0;
  }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
 @media screen and (min-width: 1280px) {
    flex-direction: row;
  }

`

export const ImageKapusta = styled.img`
  width: 183px;
  height: 47px;
  /* margin-bottom: 5px; */
  /* z-index: 2; */
  @media screen and (min-width: 768px) {
    width: 307px;
    height: 78px;

  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
  }
`;

export const TextSmartFin = styled.p`
  text-transform: uppercase;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: 0.15em;
  /* z-index: 2; */
  color: #52555f;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.18em;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.18em;
  }
`;
