import { Month, Year, Wrapper, Backdrop } from './ReportsCalendar.styled';
import { useEffect } from 'react';
import { monthNames } from '../ReportsSlider/ReportsSliderData';
import ButtonPrev from '../ButtonPrev';

const ReportsCalendar = ({
  onClose,
  currentMonth,
  currentYear,
  onChangeDate,
}) => {
  const handleYear = name => {
    onChangeDate(name);
  };
  const handleMonth = event => {
    const choosedMonth = event.currentTarget.textContent;
    const name = monthNames.indexOf(choosedMonth);
    onChangeDate(name);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <Wrapper>
        <ButtonPrev onButtonClick={handleYear}>
          <Year>{currentYear}</Year>
        </ButtonPrev>
        <ul>
          {monthNames.map(item => {
            return (
              <Month
                className={item === currentMonth ? 'active' : ''}
                onClick={handleMonth}
                key={item}
              >
                {item}
              </Month>
            );
          })}
        </ul>
      </Wrapper>
    </Backdrop>
  );
};

export default ReportsCalendar;
