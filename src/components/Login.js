import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

export default function Login(props) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [userIdError, setUserIdError] = useState(null);
  const [error, setError] = useState(null);

  function validateForm() {
    let flag = true;
    if (userId === '') {
      setUserIdError('Required');
      flag = false;
    }
    if (password === '') {
      setPasswordError('Required');
      flag = false;
    }
    return flag;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm())
      axios
        .post(`${process.env.REACT_APP_URL}/login`, {
          userId: userId,
          password,
        })
        .then((res) => {
          props.history.push('/balance');
        })
        .catch((serverError) => {
          setError('Invalid username or Password');
        });
    console.log(error);
  }

  const showError = () =>
    error ? <Alert variant="danger"> {error} </Alert> : null;

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userid">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            autoFocus
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            isInvalid={!!userIdError}
          />
          <Form.Control.Feedback type="invalid">
            {userIdError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>
        {showError()}
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
