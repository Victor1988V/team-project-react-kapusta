import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// import { StyledContainerDiv } from './SharedLayouts.styled';
import { Header } from './../Header/Header';

export const SharedLayouts = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
