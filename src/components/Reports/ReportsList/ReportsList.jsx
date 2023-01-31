import { useState } from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredDataAction } from 'redux/reportsQuery/reportsQuery.slice';
import { selectReports } from 'redux/selectors';
import { List, Item, ItemIncome, ItemSvg, BgcSvg } from './ReportsList.styled';
import reportsIcon from 'images/reportsFiles/reports.svg';
import BgcIcon from 'images/reportsFiles/bgcForSvg.svg';
import OrangeBgc from 'images/orangeBgc.svg';
import { translateToEng } from 'hooks/useCategory';

export const ReportsList = ({ onChange }) => {
  const [active, setActive] = useState('');
  const { reports } = useSelector(selectReports);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const valueArr = [];
  // console.log('LISTrepotrs', reports);
  const expensesData = useMemo(
    () => reports?.expenses?.expensesData ?? {},
    [reports]
  );
  // console.log('LISTexpensesData', expensesData);
  const incomesData = useMemo(
    () => reports?.incomes?.incomesData ?? {},
    [reports]
  );

  useEffect(() => {
    if (onChange === 'expenses') {
      setData(expensesData ?? {});
      setActive('');
    } else {
      setData(incomesData ?? {});
      setActive('');
    }
  }, [onChange, expensesData, incomesData, setActive]);

  const handlerEventClick = event => {
    setActive(event.currentTarget.id);
    const filteredValueArr = valueArr.filter(
      item => item[0].replace(/\s+/g, '') === event.currentTarget.id
    );
    dispatch(filteredDataAction(filteredValueArr));
  };
  const entries = Object.entries(data) ?? [];

  return (
    <div>
      <List className={onChange === 'income' ? 'incomeList' : ''}>
        {entries.map(item => {
          const iconName = item[0].replace(/\s+/g, '');
          valueArr.push(item);
          if (onChange === 'expenses') {
            return (
              <Item
                key={iconName}
                id={iconName}
                onClick={handlerEventClick}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg width="56" height="56">
                  <BgcSvg
                    src={iconName === active ? OrangeBgc : BgcIcon}
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  />
                  <use href={`${reportsIcon}#${iconName}`}></use>
                </ItemSvg>
                <p>{translateToEng(item[0])}</p>
              </Item>
            );
          } else if (onChange === 'income') {
            return (
              <ItemIncome
                key={iconName}
                id={iconName}
                onClick={handlerEventClick}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg
                  width="56"
                  height="56"
                  className={iconName === active ? 'active' : ''}
                >
                  <BgcSvg
                    src={iconName === active ? OrangeBgc : BgcIcon}
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  />
                  <use href={`${reportsIcon}#${iconName}`}></use>
                </ItemSvg>
                <p>{translateToEng(item[0])}</p>
              </ItemIncome>
            );
          }
          return <></>;
        })}
      </List>
    </div>
  );
};
