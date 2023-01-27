import React, { useState } from 'react';
import arrow from '../../../images/arrow-bottom.svg';
import {
  ProductField,
  Thumb,
  CategoryList,
  Category,
} from './ProductCategoryList.styled';

export const ProductCategoryList = ({
  elementCategory,
  setElementCategory,
  categoryArray,
}) => {
  const [selectCategory, setSelectCategory] = useState(false);

  const onSelect = () => {
    setSelectCategory(!selectCategory);
  };

  const getElementCategory = event => {
    setSelectCategory(!selectCategory);
    setElementCategory(event.target.innerText);
  };
  return (
    <Thumb>
      <ProductField onClick={onSelect}>
        <span>{elementCategory}</span>
        <img src={arrow} alt="open list" />
      </ProductField>
      {selectCategory && (
        <CategoryList>
          {categoryArray.map(element => (
            <Category key={element} onClick={getElementCategory}>
              {element}
            </Category>
          ))}
        </CategoryList>
      )}
    </Thumb>
  );
};
