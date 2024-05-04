import React, {useState} from 'react';
const States = () => {
  //   const color = 'red';

  const [color, setColor] = useState('red');

  return (
    <>
      <h1>My Favorite Color is {color}</h1>
      <button
        className='btn'
        onClick={() => {
          setColor('Green');
        }}>
        Change Color
      </button>
    </>
  );
};

export default States;
