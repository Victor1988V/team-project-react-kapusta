import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { ProductCategoryList } from './ProductCategoryList/ProductCategoryList';

export const ProductInputForm = () => {
  // const dispatch = useDispatch();
  // const { isMobile } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  const [elementCategory, setElementCategory] = useState('Category');
  // const location = useLocation();
  let categoryArray;
  // let functionToDispatch;

  // if (location.pathname === '/home/income' || location.pathname === '/income') {
  //   categoryArray = ['Salary', 'Additional income'];
  //   // functionToDispatch = addIncome;
  // }
  // if (
  //   location.pathname === '/home/expenses' ||
  //   location.pathname === '/expenses'
  // ) {
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
  // functionToDispatch = addExpense;
  // }

  const handleSubmit = event => {
    event.preventDefault();
    const { desc, sum } = event.target.elements;
    console.log('desc', desc.value, 'sum', sum.value);
    // let transValue = sum.value;
    // Checks for empty values
    // if (descr.value.trim() === '') {
    //   toast('Please enter a description');
    //   return;
    // }
    // if (elementCategory === 'Category') {
    //   toast('Please enter a category');
    //   return;
    // }
    // if (transValue.trim() === '') {
    //   toast('Please enter an amount');
    //   return;
    // }
    // if (transValue < 0) transValue = transValue * -1;

    // Prepare data for dispatch
    // const dataToDispatch = {
    //   description: descr.value,
    //   amount: Number(transValue),
    //   date: startDate.toISOString().split('T')[0],
    //   category: categoryEngToOrk(elementCategory),
    // };
    // dispatch
    // dispatch(functionToDispatch(dataToDispatch));
    // event.target.reset();
    // setElementCategory('Category');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="desc" placeholder="Product description" />
      <ProductCategoryList
        categoryArray={categoryArray}
        elementCategory={elementCategory}
        setElementCategory={setElementCategory}
      />
      <input type="number" name="sum" placeholder="0,00" />
      <div>
        <button type="submit">INPUT</button>
        <button type="button">CLEAR</button>
      </div>
    </form>
  );
};
