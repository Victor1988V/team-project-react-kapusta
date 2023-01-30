import React from 'react';
import { ReportsInfo } from 'components/Reports/ReportsInfo/ReportsInfo';
import { ReportsNav } from 'components/Reports/ReportsNav/ReportsNav';
import { WraperBg } from './ReportsPage.styled';

export default function ReportsPage() {
  return (
    <WraperBg>
      <ReportsNav />
      <ReportsInfo />
    </WraperBg>
  );
}
