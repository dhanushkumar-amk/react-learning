import React from 'react';
const Content = () => {
  function handleNameChange() {
    const names = ['Html', 'css', 'react', 'js'];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  }
  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  // passing parameter

  // it is passing the value automatically
  // so we add anonymous function
  const handleClick2 = () => {
    console.log('hello');
  };
  // onClick={handleClick2()}

  return (
    <main>
      <p onDoubleClick={handleClick2}> {handleNameChange()}</p>

      <button
        className='btn'
        onClick={(e) => handleClick(e)}>
        Submit
      </button>
    </main>
  );
};

export default Content;

// passing the events in parameter
