import styled from 'styled-components';
export const FormThumb = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: baseline;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ProductField = styled.input`
  /* margin: auto auto; */
  width: 280px;
  height: 44px;
  padding: 2px 20px;
  border: 2px solid #ffffff;
  border-bottom: none;
  border-radius: 16px 16px 0 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  outline: none;
  background-color: #f5f6fb;
  color: #c7ccdc;
  &::placeholder {
    color: #c7ccdc;
  }
  @media screen and (min-width: 768px) {
    width: 186px;
    border-color: #f5f6fb;
    border-bottom: 2px solid #f5f6fb;
    border-right: none;
    border-top-right-radius: 0px;
    background-color: #ffffff;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
  }
`;
export const ThumbButton = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    gap: 15px;
    justify-content: flex-start;
    margin-top: 32px;
    margin-left: 35px;
  }
  @media screen and (min-width: 1280px) {
    gap: 16px;
    margin-top: 0;
    margin-left: 32px;
  }
`;
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledWhiteButton = styled.button`
  padding: 12px 34px;
  width: 136px;
  border: 2px solid #f5f6fb;
  background-color: #fff;
  border-radius: 16px;
  color: #52555f;
  font-size: 12px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.17;
  text-transform: uppercase;
`;
