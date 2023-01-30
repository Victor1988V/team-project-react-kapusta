import { TransactionTable } from './TransactionsTable.styled';
import { useDispatch } from 'react-redux';
// import { selectIsLoading } from 'redux/selectors';
import { deleteTransaction } from '../../services/transactionsAPI';
import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
import { translateToEng } from 'hooks/useCategory';
export const TransactionsTable = ({ children }) => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const color = children[1];
  let minus = '-';
  if (color === 'green') {
    minus = false;
  }
  const handleDelete = event => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  const sortedTransactions = children[0].slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });
  console.log(sortedTransactions);
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
          <th>SUM</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.slice(0, 20).map(el => {
          const { _id, description, amount, date, category } = el;
          return (
            <tr key={_id} style={{ height: 40 }}>
              <td>{date.split('-').reverse().join('-')}</td>
              <td>{description}</td>
              <td>{translateToEng(category)}</td>
              <td style={{ color }}>
                {minus} {amount}.00
              </td>
              <td>
                <span
                  id={_id}
                  onClick={handleDelete}
                  style={{ cursor: 'pointer' }}
                >
                  <DeleteIcon />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};