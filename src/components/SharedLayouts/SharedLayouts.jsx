import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { StyledContainerDiv } from './SharedLayouts.styled';

export const SharedLayouts = () => {
  return (
    <StyledContainerDiv>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </StyledContainerDiv>
  );
};
