import React, {useState} from 'react';const UseState = () => {
  //   const [color, setColor] = useState('red');
  //   const [name, setName] = useState('dhanushkumar');
  //   const [age, setAge] = useState('19');

  const [info, setInfo] = useState({
    name: 'Dhanushkumar',
    age: '19',
    color: 'Red',
    language: 'JavaScript',
  });

  function UpdateInfo() {
    setInfo({...info, color: 'Blue'});
  }
  return (
    <>
      <h1>My Info</h1>
      <p>Name :{info.name} </p>
      <p>Age : {info.age}</p>
      <p>Color : {info.color} </p>
      <p>Language :{info.language} </p>
      <button
        className='btn'
        onClick={() => {
          UpdateInfo();
        }}>
        Change
      </button>
    </>
  );
};

export default UseState;
