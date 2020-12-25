import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Home = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get('/api/details').then((res) => {
      console.log(res);
    });
  }, []);
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

export default connect(mapStateToProps)(Home);
