import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { useMatchMedia } from 'hooks/useMatchMedia';

// import { Header } from 'components/Header/Header';
// import { StyledContainerDiv, Wrapper } from './WrapperLogin.styled';
// import HomePageBg from 'components/HomePageBg/HomePageBg';
import Loader from 'components/Loader/Loader';

import kapusta from 'images/kapustaTab.svg';
import kapustaDesktop from 'images/kapustaDesk.svg';
import kapustaMob from 'images/kapusta.svg';

import {
  KapustaTabLogin,
  KapustaTabLoginBottom,
  KapustaDeskLogin,
  KapustaDeskLoginBottom,
  KapustaMobLoginBottom, KapustaMobLoginTop,
  WrapperLogIn,
} from 'page/HomePage/HomePage.styled';

export const WrapperLogin = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  return (
    <WrapperLogIn>
      {/* <HomePageBg /> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {isDesktop && (
        <KapustaDeskLogin src={kapustaDesktop} width="1334" height="232" />
      )}
      {isDesktop && (
        <KapustaDeskLoginBottom src={kapusta} width="183" height="146" />
      )}
      {isTablet && (
        <KapustaTabLogin src={kapustaDesktop} width="1334" height="232" />
      )}
      {isTablet && (
        <KapustaTabLoginBottom src={kapusta} width="183" height="146" />
      )}
      {isMobile && (
        <KapustaMobLoginBottom src={kapustaMob} width="83" height="89" />
      )}
      {isMobile && (
        <KapustaMobLoginTop src={kapustaMob} width="83" height="89" />
      )}
    </WrapperLogIn>
  );
};
