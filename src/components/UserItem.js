import React from 'react';

export const UserItem = ({ user, selectItem }) => {
  return (
    <ul style={{ cursor: 'pointer' }} onClick={() => selectItem(user)}>
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
