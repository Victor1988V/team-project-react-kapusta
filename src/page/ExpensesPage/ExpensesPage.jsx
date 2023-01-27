import { ProductInputForm } from './../../components/ProductInputForm/ProductInputForm';
import { TransactionsList } from './../../components/TransactionsList/TransactionsList';
import { Wrapper } from './ExpensesPage.styled';

export const ExpensesPage = () => {
  return (
    <Wrapper>
      <ProductInputForm />
      <TransactionsList />
    </Wrapper>
  );
};
