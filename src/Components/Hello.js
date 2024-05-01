import React from 'react';import ClassComponents from './ClassComponent';
// props is a property to take the value from the another concept
const Hello = (props) => {
  //   const {initial, age} = props;
  //   const name = `My Name is ${initial} dhanushkumar and
  const {carInfo} = props;
  const {brand, color, speed} = carInfo;

  const name = `car = color : ${color} ,
  brand : ${brand} , \n
speed : ${speed}
`;
  return (
    <div>
      <h2>{name}</h2>
      <ClassComponents />
    </div>
  );
};

export default Hello;
