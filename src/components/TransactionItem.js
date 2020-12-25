import React from 'react';

export const TransactionItem = ({ transaction }) => {
  return (
    <ul>
      <h4>
        <b> ID: {transaction.id} </b>
      </h4>
      <span> Sender: {transaction.sender} </span> <br />
      <span> Reciever: {transaction.reciever} </span> <br />
      <span> Amount: {transaction.amount} </span>
      <hr></hr>
    </ul>
  );
};
