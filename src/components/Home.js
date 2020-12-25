import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { UserList } from './UserList';
import { Balance } from './Balance';
import { TransactionList } from './TransactionList';
import { CreateTransaction } from './CreateTransaction';
import { ActionCreators } from '../store/actions';

const Home = (props) => {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [selectedContact, setSelectedContact] = useState({
    to: '',
  });

  useEffect(() => {
    if (!props.userId) props.history.push('/');
    axios.get('/api/details').then((res) => {
      setUserData({ ...userData, data: res.data });
    });

    updateTransaction();
  }, []);

  const handleSelect = (data) => {
    setSelectedContact({
      contact: data.id,
      user: props.userId,
      name: data.name,
    });
  };

  const logout = () => {
    props.logout();
    props.history.push('/');
  };

  const updateTransaction = (data) => {
    axios.get('/api/transactions').then((res) => {
      setTransactions({
        data: res.data.filter((item) => item.sender === props.userId),
      });
    });
    axios.get('/api/balances').then((res) => {
      setBalance(res.data.balance);
    });
  };

  if (!userData) return <div>Users not found</div>;
  else
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={logout}
          style={{ top: '16px', right: '18px', position: 'absolute' }}
        >
          Logout
        </button>
        <Balance balance={balance} />
        <div className="row">
          <UserList
            class="col-6"
            users={userData.data}
            selectItem={handleSelect}
          />
          <CreateTransaction
            contact={selectedContact.contact}
            userId={selectedContact.user}
            contactName={selectedContact.name}
            transactionCreated={updateTransaction}
          />
          <TransactionList class="col-4" transactionData={transactions?.data} />
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

const mapDispatcherToProps = (dispatch) => {
  return {
    logout: () => dispatch(ActionCreators.logout()),
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(Home);
