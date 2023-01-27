import { Image, InputNumber, Number } from './ProductCalculate.styled';
import calculator from '../../../images/calculator.svg';
export const ProductCalculate = () => {
  return (
    <>
      <Number>
        <InputNumber type="number" placeholder="0,00" name="sum" />
        <Image src={calculator} alt="calculator" />
      </Number>
    </>
  );
};
