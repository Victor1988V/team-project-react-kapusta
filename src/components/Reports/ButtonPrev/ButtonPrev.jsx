import { Wrapper, Button } from './ButtonPrev.styled';
import reports from '../../../images/reportsFiles/reports.svg';

const ButtonPrev = ({ onButtonClick, children }) => {
  const handlerClick = event => {
    const name = event.currentTarget.name;
    onButtonClick(name);
  };

  return (
    <Wrapper>
      <Button name="decrement" onClick={handlerClick}>
        <svg width="6" height="12">
          <use href={`${reports}#icon-prev`}></use>
        </svg>
      </Button>
      {children}
      <Button name="increment" onClick={handlerClick}>
        <svg width="6" height="12">
          <use href={`${reports}#icon-next`}></use>
        </svg>
      </Button>
    </Wrapper>
  );
};

export default ButtonPrev;
