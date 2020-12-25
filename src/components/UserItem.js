import React from 'react';
import { Card } from 'react-bootstrap';

export const UserItem = ({ user }) => {
  return (
    <ul style={{ width: '30%', cursor: 'pointer' }}>
      <img
        src={user.image}
        alt="Avatar"
        style={{ width: '50px', float: 'right' }}
      />
      <h4>
        <b>John Doe</b>
      </h4>
      <p>Architect & Engineer</p>
      <hr></hr>
    </ul>
  );
};
