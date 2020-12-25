import React from 'react';
import { UserItem } from './UserItem';

export const UserList = ({ users }) => {
  return (
    <div className="row-4">
      <h2 style={{ marginLeft: '25px' }}>Contacts</h2>
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};
