import React from 'react';
import styles from '../Components/Header5.module.css';
const Header5 = () => {
  const myStyle = {
    color: 'teal',
    textAlign: 'center',
  };
  return (
    <>
      {/* inline css in react */}
      <h1
        style={{
          color: 'red',
          //   display: 'flex',
          textAlign: 'center',
          marginTop: '50%',
          //   top: '50%',
        }}>
        Hello world
      </h1>
      <p style={myStyle}>Hello world 2</p>

      <h2
        className={styles.bigBlue}
        style={styles}>
        {' '}
        Dhanushkumar
      </h2>
    </>
  );
};

export default Header5;
