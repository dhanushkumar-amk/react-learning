import React, {useState} from 'react';
const Content = () => {
  // useState();
  // function handleNameChange() {
  //   const names = ['Html', 'css', 'react', 'js'];
  //   const int = Math.floor(Math.random() * 4);
  //   return names[int];
  // }
  // const handleClick = (e) => {
  //   console.log(e.target.innerText);
  // };

  // passing parameter

  // it is passing the value automatically
  // so we add anonymous function
  // const handleClick2 = () => {
  //   console.log('hello');
  // };
  // onClick={handleClick2()}

  // hooks first useState

  const [count, setCount] = useState(1);
  // 10 is a default value
  function incrementFunction() {
    setCount(count + 1);
  }

  function decrementFunction() {
    setCount(count - 1);
  }
  return (
    <main>
      {/* <p onDoubleClick={handleClick2}> {handleNameChange()}</p>
       */}
      <p>learn java</p>
      <button
        className='btn' // onClick={(e) => handleClick(e)}
      >
        Submit
      </button>
      <button
        className='btn'
        onClick={decrementFunction}>
        -
      </button>
      <span>{count}</span>
      <button
        onClick={incrementFunction}
        className='btn'>
        +
      </button>
    </main>
  );
};

export default Content;

// passing the events in parameter
