import React from 'react';
const Basic = () => {
  function handleNameChange() {
    const names = ['Html', 'css', 'react', 'js'];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  }
  return (
    <div>
      welcome to react
      <p>Learn {handleNameChange()}</p>
    </div>
  );
};

export default Basic;
