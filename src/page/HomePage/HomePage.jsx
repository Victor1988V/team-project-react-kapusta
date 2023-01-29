import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useMatchMedia } from 'hooks/useMatchMedia';

import HomePageBg from '../../components/HomePageBg/HomePageBg';
import ReportsBtn from '../../components/Buttons/ReportsBtn/ReportsBtn';
import ChangeBalance from '../../components/ChangeBalance/ChangeBalance';
import DateSelection from '../../components/DateSelection/DateSelection';
// import { TransactionsList } from 'components/Transactions/TransactionsTable';
// import {
//   TransactionTabsMobile,
//   TransactionTabsDesktop,
// } from 'components/TransactionTabs/TransactionTabs';

import kapusta from 'images/kapustaTab.svg';
import kapustaDesktop from '../../images/kapustaDesk.svg';

import { StyledHomePage, KapustaTab, KapustaDesk } from './HomePage.styled';
import { TransactionsTable } from './../../components/Transactions/TransactionsTable';

export function HomePage() {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  // const location = useLocation();

  return (
    <>
      <HomePageBg />
      <StyledHomePage>
        <div className="flexWrapper">
          {/* {isMobile && <ReportsBtn to="/reports" state={{ from: location }} />} */}
          <ChangeBalance />
          {/* {!isMobile && <ReportsBtn to="/reports" state={{ from: location }} />} */}
        </div>
        {isMobile && (
          <div className="datePickerMobWrap">
            <DateSelection startDate={startDate} setStartDate={setStartDate} />
          </div>
        )}
        {/* {isMobile && <TransactionTabsMobile />} */}
        {/* {!isMobile && <TransactionTabsDesktop />} */}
        {!isMobile && <Outlet />}
        {isMobile && <TransactionsTable />}
        {isTablet && <KapustaTab src={kapusta} width="183" height="146" />}
        {isDesktop && (
          <KapustaDesk src={kapustaDesktop} width="1334" height="232" />
        )}
      </StyledHomePage>
    </>
  );
}
