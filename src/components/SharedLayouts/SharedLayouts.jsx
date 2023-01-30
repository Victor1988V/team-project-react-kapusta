import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { StyledContainerDiv } from './SharedLayouts.styled';
import Loader from 'components/Loader/Loader';

export const SharedLayouts = () => {
  return (
    <StyledContainerDiv>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledContainerDiv>
  );
};
