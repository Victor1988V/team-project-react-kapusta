import {
  Image,
  InputNumber,
  Number,
  NumberMobil,
  InputMobile,
  Span,
} from './ProductCalculate.styled';
import calculator from '../../../images/calculator.svg';
import { useMatchMedia } from './../../../hooks/useMacthMedia';
export const ProductCalculate = () => {
  const { isMobile } = useMatchMedia();
  return (
    <>
      {isMobile ? (
        <NumberMobil>
          <InputMobile type="number" placeholder="00.00 UAH" name="sum" />
          <Span>
            <img src={calculator} alt="calculator" />
          </Span>
        </NumberMobil>
      ) : (
        <Number>
          <InputNumber type="number" placeholder="0,00" name="sum" />
          <Image src={calculator} alt="calculator" />
        </Number>
      )}
    </>
  );
};
