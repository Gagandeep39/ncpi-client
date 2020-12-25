import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { UserList } from './UserList';
import { Balance } from './Balance';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    axios.get('/api/details').then((res) => {
      setUserData({ ...userData, data: res.data });
    });
    axios.get('/api/balances').then((res) => {
      setBalance(res.data.balance);
    });
  }, []);

  if (!userData) return <div>Users not found</div>;
  else
    return (
      <div>
        <Balance balance={balance} />
        <UserList users={userData.data} />
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

export default connect(mapStateToProps)(Home);
