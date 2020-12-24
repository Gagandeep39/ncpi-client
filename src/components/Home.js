import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Home = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
      )
      .then((res) => {
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
