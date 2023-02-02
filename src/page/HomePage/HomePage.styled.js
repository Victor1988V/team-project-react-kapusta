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
  bottom: -38px;
  /* outline: 1px solid tomato; */
  /* margin-bottom: 0; */
`;


export const Wrapper = styled.div`
position: relative;
/* height: 100vh; */
min-height: 851px;
/* outline: 1px solid tomato; */
`

export const KapustaDeskLogin = styled(HandySvg)`
  position: absolute;
  left: center;
  margin-left: 10px;
  z-index: -1;
  top: 28px;
  /* outline: 1px solid tomato; */
  /* margin-bottom: 0; */

  `;

export const KapustaDeskLoginBottom = styled(HandySvg)`
    position: absolute;
    z-index: -1;
    left: 230px;
    bottom: 50px;
    /* outline: 1px solid tomato; */
  `;

export const KapustaTabLogin = styled(HandySvg)`
  position: absolute;
  z-index: -1;
  left: 10px;
  top: 28px;
  /* outline: 1px solid tomato; */
`;

export const KapustaTabLoginBottom = styled(HandySvg)`
    position: absolute;
    z-index: -1;
    left: 103px;
    bottom: 90px;
    /* outline: 1px solid tomato; */
  `;

export const KapustaMobLoginBottom = styled(HandySvg)`
    position: absolute;
    z-index: -1;
    left: 35px;
    bottom: 0;
    /* outline: 1px solid tomato; */
  `;

export const KapustaMobLoginTop = styled(HandySvg)`
    position: absolute;
    z-index: -1;
    right: -40px;
    top: 104px;
    /* outline: 1px solid tomato; */
  `;


export const WrapperLogIn = styled.div`
  position: relative;
  top: 0;
  height: 856px;
  width: 320px;
  /* outline: 1px solid tomato; */
@media screen and (min-width: 768px) {
  height: 1024px;
  width: 768px;
  /* outline: 1px solid tomato; */
}
@media screen and (min-width: 1280px) {
  height: 800px;
  width: 1280px;
  /* outline: 1px solid tomato; */
}
`;
