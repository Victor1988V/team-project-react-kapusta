import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  ProductField,
  Form,
  ThumbButton,
  FormThumb,
  WrapperInput,
  StyledWhiteButton,
} from './ProductInputForm.styled';

import { ProductCategoryList } from './ProductCategoryList/ProductCategoryList';
import { OrangeButton } from './../Buttons/OrangeButton';
import { ProductCalculate } from './ProductCalculate/ProductCalculate';
import DateSelection from 'components/DateSelection/DateSelection';

import { useMatchMedia } from 'hooks/useMatchMedia';
import { translateToRus } from 'hooks/useCategory';
import { addExpense, addIncome } from 'services/transactionsAPI';

export const ProductInputForm = () => {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  const [elementCategory, setElementCategory] = useState('Category');
  const location = useLocation();
  let categoryArray;
  let functionToDispatch;
  const ref = React.useRef();

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

  const clearForm = event => {
    event.preventDefault();
    ref.current.reset();
  };

  return (
    <FormThumb>
      {!isMobile && (
        <DateSelection startDate={startDate} setStartDate={setStartDate} />
      )}
      <Form onSubmit={handleSubmit} ref={ref}>
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
          <StyledWhiteButton type="button" onClick={clearForm}>
            Clear
          </StyledWhiteButton>
        </ThumbButton>
      </Form>
    </FormThumb>
  );
};
