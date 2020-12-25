import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { UserList } from './UserList';
import { Balance } from './Balance';
import { Redirect } from 'react-router';
import { TransactionList } from './TransactionList';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    axios.get('/api/details').then((res) => {
      setUserData({ ...userData, data: res.data });
    });
    axios.get('/api/balances').then((res) => {
      setBalance(res.data.balance);
    });
    axios.get('/api/transactions').then((res) => {
      console.log(res.data);
      setTransactions({ ...transactions, data: res.data });
    });
  }, []);

  if (!userData) return <div>Users not found</div>;
  else
    return (
      <div>
        <Balance balance={balance} />
        <div className="row">
          <UserList class="col-6" users={userData.data} />
          <TransactionList class="col-4" transactionData={transactions.data} />
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

export default connect(mapStateToProps)(Home);
