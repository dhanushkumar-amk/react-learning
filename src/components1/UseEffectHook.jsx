import React, {useEffect, useState} from 'react';const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log('Screen Refreshed');
    // checkCount();
    setCount(1);
  }, []);
  function checkCount() {
    if (count > 10) {
      setCount(1);
    }
  }

  function updateCount() {
    setCount((previousCount) => {
      return previousCount + 1;
    });
  }
  return (
    <>
      <h1>I Have Rendered {count} times</h1>
      <button
        onClick={() => {
          updateCount();
        }}>
        Increase Count
      </button>
    </>
  );
};

export default UseEffectHook;
