import React from 'react';import {useParams} from 'react-router-dom';
const UserPage = () => {
  const {id} = useParams();
  return (
    <>
      <h1>User Profile Page</h1>
      <p>
        user id is <b>{id}</b>
      </p>
    </>
  );
};

export default UserPage;
