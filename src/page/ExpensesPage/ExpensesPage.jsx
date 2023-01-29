import { ProductInputForm } from './../../components/ProductInputForm/ProductInputForm';
import { TransactionsList } from './../../components/TransactionsList/TransactionsList';
import { Wrapper } from './ExpensesPage.styled';
import { useMatchMedia } from './../../hooks/useMacthMedia';
import DateSelection from './../../components/DateSelection/DateSelection';

export const ExpensesPage = () => {
  const { isMobile } = useMatchMedia();
  return (
    <>
      {isMobile ? (
        <ProductInputForm />
      ) : (
        <Wrapper>
          <DateSelection />
          <ProductInputForm />
          <TransactionsList />
        </Wrapper>
      )}
    </>
  );
};
