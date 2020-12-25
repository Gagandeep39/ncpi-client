import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

export const CreateTransaction = ({
  contact,
  userId,
  contactName,
  transactionCreated,
}) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event, trans) => {
    event.preventDefault();
    if (validateError()) submitForm(trans);
  };

  const submitForm = (transaction) => {
    let data = {
      sender: userId,
      reciever: contact,
      amount,
      type: transaction,
    };
    console.log(data);
    axios
      .post('/api/transactions', data)
      .then((res) => {
        transactionCreated(res);
      })
      .catch((err) => {
        console.log(err.response);
        setError('Not Enough Balance');
      });
  };

  const validateError = () => {
    if (!amount) {
      setError('Cannot be empty');
      return false;
    }
    setError('');
    return true;
  };

  const view = () => {
    if (!contact)
      return (
        <p style={{ padding: '12px' }}>Select Contact to make a transaction</p>
      );
    else
      return (
        <div style={{ margin: 'auto', width: '80%' }}>
          <h4 style={{ margin: '45px', textAlign: 'center' }}>{contactName}</h4>
          <Form>
            <Form.Group size="lg" controlId="userid">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                autoFocus
                type="number"
                value={amount}
                required
                isInvalid={!!error}
                onChange={(e) => {
                  setAmount(e.target.value);
                  validateError();
                }}
              />
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <button
            className="btn btn-success m-2 btn-block"
            onClick={(event) => handleSubmit(event, 'send')}
          >
            Send
          </button>{' '}
          <br />
          <button
            onClick={(event) => handleSubmit(event, 'recieve')}
            className="btn btn-success m-2 btn-block"
          >
            Recieve
          </button>
        </div>
      );
  };
  return (
    <div style={{ width: '40%' }}>
      <h2 style={{ marginLeft: '25px' }}>Create Transaction</h2>
      {view()}
    </div>
  );
};
