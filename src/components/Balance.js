import React from 'react';
import { Card } from 'react-bootstrap';

export const Balance = ({ balance }) => {
  return (
    <div className="container d-flex justify-content-center">
      <Card style={{ margin: '18px', padding: '18px' }}>
        <h1>Balance : {balance !== null ? balance : 'Loading..'} </h1>
      </Card>
    </div>
  );
};
