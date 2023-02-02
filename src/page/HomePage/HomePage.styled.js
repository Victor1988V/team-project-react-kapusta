import styled from 'styled-components';
import { HandySvg } from '@handy-ones/handy-svg';

export const StyledHomePage = styled.div`
  padding: 46px 0px 0px 0px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding: 40px 32px 60px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 91px 83px 91px;
  }
  .flexWrapper {
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 60px;
    }
    @media screen and (min-width: 1280px) {
      position: relative;
      margin-bottom: 8px;
    }
  }
  .datePickerMobWrap {
    width: 90px;
    margin: 0 auto 70px;
  }
`;

export const KapustaTab = styled(HandySvg)`
  position: absolute;
  z-index: -1;
  right: 88px;
  bottom: 59px;
  /* outline: 1px solid tomato; */
`;

export const KapustaDesk = styled(HandySvg)`
  position: absolute;
  left: center;
  margin-left: 10px;
  z-index: -1;
  bottom: -20px;
  /* outline: 1px solid tomato; */
  /* margin-bottom: 0; */

`;
