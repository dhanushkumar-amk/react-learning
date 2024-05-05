import React, {useState} from 'react';
const ReactForm = () => {
  const [name, setName] = useState(' ');
  //   console.log('Current Sate :', name);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted');
    console.log('Current Sate :', name);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Name :
          <input
            type='text'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <input
          className='btn'
          type='submit'
          value='Submit Form'
        />
        <label>
          Message
          <textarea
            name=''
            id=''></textarea>
        </label>
      </form>
    </>
  );
};

export default ReactForm;
