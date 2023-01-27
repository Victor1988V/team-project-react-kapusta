import React, { useState } from 'react';

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
    <div>
      <div onClick={onSelect}>
        <span>{elementCategory}</span>
        <img src="#" alt="" />
      </div>
      {selectCategory && (
        <div>
          {categoryArray.map(element => (
            <div key={element} onClick={getElementCategory}>
              {element}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
