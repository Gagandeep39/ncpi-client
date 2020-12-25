import React from 'react';
import { Card } from 'react-bootstrap';

export const UserItem = ({ user }) => {
  return (
    <ul style={{ cursor: 'pointer' }}>
      <img
        src={user.image}
        alt="Avatar"
        style={{ width: '50px', float: 'right' }}
      />
      <h4>
        <b> {user.id} </b>
      </h4>
      <p> {user.name} </p>
      <hr></hr>
    </ul>
  );
};
