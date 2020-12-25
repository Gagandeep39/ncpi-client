import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { UserList } from './UserList';
import { Balance } from './Balance';
import { TransactionList } from './TransactionList';
import { CreateTransaction } from './CreateTransaction';

const Home = (props) => {
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [selectedContact, setSelectedContact] = useState({
    to: '',
  });

  useEffect(() => {
    axios.get('/api/details').then((res) => {
      setUserData({ ...userData, data: res.data });
    });
    axios.get('/api/balances').then((res) => {
      setBalance(res.data.balance);
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

  const updateTransaction = (data) => {
    axios.get('/api/transactions').then((res) => {
      setTransactions({ ...transactions, data: res.data });
    });
  };

  if (!userData) return <div>Users not found</div>;
  else
    return (
      <div>
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
          />
          <TransactionList
            class="col-4"
            transactionData={transactions?.data}
            transactionCreated={updateTransaction}
          />
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
