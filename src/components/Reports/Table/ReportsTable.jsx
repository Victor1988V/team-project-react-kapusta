import React, { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { useSelector } from 'react-redux';
import {
  selectDataChart,
  selectReportsQuery,
  selectReportsData,
} from 'redux/selectors';

import {
  ChartDataDesktop,
  ChartOptionsDesktop,
} from 'components/Reports/Table/TableOptions';

import { SortData, SortDataSubMenu } from 'components/Reports/Table/TableUtils';

import {
  BoxPadding,
  ChartBox,
} from 'components/Reports/Table/ReportsTable.styled';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

export const ReportsTable = ({ onChange }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [check, setCheck] = useState(false);
  const [indexAxis, setIndexAxis] = useState('');
  const [innerWidth, setInnerWidth] = useState('');
  const [currentChart, setCurrentChart] = useState('income');

  const reportsData = useSelector(selectReportsData);

  let dataSubMenu = useSelector(selectDataChart);
  const divRef = useRef();
  const ref = useRef(null);
  const div2Ref = useRef();
  const reportsQuery = useSelector(selectReportsQuery);

  useEffect(() => {
    const resizeHandler = e => {
      setInnerWidth(getComputedStyle(div2Ref?.current).width);
      if (
        getComputedStyle(div2Ref?.current).width === '704px' &&
        indexAxis !== 'x'
      ) {
        setIndexAxis('x');
        setChartOptions(ChartOptionsDesktop('x'));
      }
      if (
        getComputedStyle(div2Ref?.current).width === '280px' &&
        indexAxis !== 'y'
      ) {
        setIndexAxis('y');
        setChartOptions(ChartOptionsDesktop('y'));
      }
    };

    window.addEventListener('resize', resizeHandler);

    if (indexAxis === '' && window.innerWidth >= 768) {
      setIndexAxis('x');
    } else if (indexAxis === '' && window.innerWidth < 768) {
      setIndexAxis('y');
    }

    return () => window.removeEventListener('resize', resizeHandler);
  }, [divRef, indexAxis]);

  useEffect(() => {
    if (
      (currentChart !== onChange && reportsData !== []) ||
      !reportsData ||
      reportsData !== []
    ) {
      if (onChange === 'expenses') {
        const data = reportsData?.expenses?.expensesData;
        if (data && indexAxis !== '') {
          const info = SortData(data);
          setChartData(ChartDataDesktop(info.x, info.y, indexAxis));
          setChartOptions(ChartOptionsDesktop(indexAxis));
          setCurrentChart(onChange);
          setCheck(false);
        }
      } else if (onChange === 'income') {
        const data = reportsData?.incomes?.incomesData;
        if (data) {
          const info = SortData(data);
          setChartData(ChartDataDesktop(info.x, info.y, indexAxis));
          setChartOptions(ChartOptionsDesktop(indexAxis));
          setCurrentChart(onChange);
          setCheck(false);
        }
      }
    }
    return;
  }, [
    onChange,
    reportsData?.expenses?.expensesData,
    reportsData?.incomes?.incomesData,
    dataSubMenu,
    indexAxis,
    reportsData,
    currentChart,
    reportsQuery,
  ]);

  useEffect(() => {
    if (dataSubMenu.length <= 0 && check) {
      return;
    }
    if (dataSubMenu.length > 0) {
      const info = SortDataSubMenu(dataSubMenu);

      if (
        chartData?.datasets[0].data[0] !== info.y[0] &&
        chartData?.labels[0] !== info?.x[0]
      ) {
        setCheck(true);
        setChartOptions(ChartOptionsDesktop(indexAxis));
        setChartData(ChartDataDesktop(info.x, info.y, indexAxis));
      } else {
        return;
      }
    }
  }, [dataSubMenu, check, chartData?.datasets, chartData?.labels, indexAxis]);

  useEffect(() => {
    const el2 = ref.current;
    if (indexAxis === 'y') {
      el2.resize(280, 480);
    }
  }, [chartData, innerWidth, indexAxis]);

  return (
    <BoxPadding ref={div2Ref}>
      <ChartBox ref={divRef}>
        <Bar
          ref={ref}
          id="my-chart"
          style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
          data={chartData}
          options={chartOptions}
        />
      </ChartBox>
    </BoxPadding>
  );
};
