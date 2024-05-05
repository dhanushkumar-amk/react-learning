import React, {useState} from 'react';
const ReactForm = () => {
  const [name, setName] = useState(' ');

  return (
    <>
      <form>
        <label>
          Enter Your Name :
          <input type='text' />
        </label>
      </form>
    </>
  );
};

export default ReactForm;
