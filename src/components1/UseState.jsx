import React, {useState} from 'react';
const UseState = () => {
  const [color, setColor] = useState('red');
  const [name, setName] = useState('dhanushkumar');
  const [age, setAge] = useState('19');
  return (
    <>
      <h1>My Info</h1>
      <p>Name :{name} </p>
      <p>Age : {age}</p>
      <p>Color : {color} </p>
      <p>Language : java , Js</p>
    </>
  );
};

export default UseState;
