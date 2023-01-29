import { useState } from 'react';
import { ProductCategoryList } from './ProductCategoryList/ProductCategoryList';
import { OrangeButton } from './../Buttons/OrangeButton';
import { WhiteButton } from './../Buttons/WhiteButton';
import {
  ProductField,
  Form,
  ThumbButton,
  FormThumb,
  WrapperInput,
} from './ProductInputForm.styled';
import { ProductCalculate } from './ProductCalculate/ProductCalculate';
import DateSelection from './../DateSelection/DateSelection';
import { useDispatch } from 'react-redux';
import { useMatchMedia } from './../../hooks/useMatchMedia';
import { addExpense, addIncome } from './../../services/transactionsAPI';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { translateToRus } from './../../hooks/useCategory';
export const ProductInputForm = () => {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  const [elementCategory, setElementCategory] = useState('Category');
  const location = useLocation();
  let categoryArray;
  let functionToDispatch;

  if (location.pathname === '/home/income' || location.pathname === '/income') {
    categoryArray = ['Salary', 'Additional income'];
    functionToDispatch = addIncome;
  }
  if (
    location.pathname === '/home/expenses' ||
    location.pathname === '/expenses'
  ) {
    categoryArray = [
      'Products',
      'Alcohol',
      'Entertainment',
      'Health',
      'Transport',
      'Housing',
      'Technics',
      'Communal and communication',
      'Sport and hobby',
      'Education',
      'Other',
    ];
    functionToDispatch = addExpense;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { desc, sum } = event.target.elements;
    let transValue = sum.value;

    if (desc.value.trim() === '') {
      window.alert('Please enter a description');
      return;
    }
    if (elementCategory === 'Category') {
      window.alert('Please enter a category');
      return;
    }
    if (transValue.trim() === '') {
      window.alert('Please enter an amount');
      return;
    }
    if (transValue < 0) transValue = transValue * -1;

    const dataToDispatch = {
      description: desc.value,
      amount: Number(transValue),
      date: startDate.toISOString().split('T')[0],
      category: translateToRus(elementCategory),
    };

    dispatch(functionToDispatch(dataToDispatch));
    event.target.reset();
    setElementCategory('Category');
  };

  return (
    <FormThumb>
      {!isMobile && (
        <DateSelection startDate={startDate} setStartDate={setStartDate} />
      )}
      <Form onSubmit={handleSubmit}>
        <WrapperInput>
          <ProductField
            type="text"
            name="desc"
            placeholder="Product description"
          />
          <ProductCategoryList
            categoryArray={categoryArray}
            elementCategory={elementCategory}
            setElementCategory={setElementCategory}
          />
          <ProductCalculate />
        </WrapperInput>

        <ThumbButton>
          <OrangeButton type="submit">INPUT</OrangeButton>
          <WhiteButton type="button">CLEAR</WhiteButton>
        </ThumbButton>
      </Form>
    </FormThumb>
  );
};
