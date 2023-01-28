import React from 'react';
import DatePicker from 'react-datepicker';
import { StyledDatePicker } from './DateSelection.styled';
import { ReactComponent as Calendar } from '../../images/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelection = ({ startDate, setStartDate }) => {
  const handleClick = event => {
    event.preventDefault();
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="example-custom-input datePicker"
      onClick={onClick}
      ref={ref}
    >
      <Calendar className="calendarIcon" />
      {value}
    </button>
  ));
  return (
    <StyledDatePicker onClick={handleClick}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </StyledDatePicker>
  );
};

export default DateSelection;
