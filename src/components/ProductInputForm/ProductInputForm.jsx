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

export const ProductInputForm = () => {
  const [elementCategory, setElementCategory] = useState('Category');
  let categoryArray;
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

  const handleSubmit = event => {
    event.preventDefault();
    const { desc, sum } = event.target.elements;
    console.log('desc', desc.value, 'sum', sum.value);
  };

  return (
    <FormThumb>
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
