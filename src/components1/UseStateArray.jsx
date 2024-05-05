import React, {useState} from 'react';
const UseStateArray = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  function addItem() {
    const itemName = 'Item : ' + count;
    setList((pre) => {
      return [...pre, itemName];
    });
    setCount((pre) => {
      return pre + 1;
    });
  }
  return (
    <>
      <h1>UseState in Array</h1>
      <button
        className='btn'
        onClick={() => {
          addItem();
        }}>
        Add Items
      </button>
      <ul>
        {list.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default UseStateArray;
