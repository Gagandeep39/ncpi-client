import React from 'react';
import { TransactionItem } from './TransactionItem';

export const TransactionList = ({ transactionData }) => {
  return (
    <div style={{ width: '30%' }}>
      <h2 style={{ marginLeft: '25px' }}>Transaction List</h2>
      {transactionData &&
        transactionData.map((trans) => <TransactionItem transaction={trans} />)}
    </div>
  );
};
