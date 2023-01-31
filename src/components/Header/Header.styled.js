import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;

  @media screen and (min-width: 768px) {
    padding: 12px 16px;
  }
`;
