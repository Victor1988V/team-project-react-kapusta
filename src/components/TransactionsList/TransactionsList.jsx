import { TransactionTable } from './TransactionsList.styled';
export const TransactionsList = () => {
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
        <tr style={{ height: 40 }}>
          <td>data</td>
          <td>desc</td>
          <td>category</td>
          <td>sum</td>
          <td>
            <span style={{ cursor: 'pointer' }}>trash</span>
          </td>
        </tr>
      </tbody>
    </TransactionTable>
  );
};
