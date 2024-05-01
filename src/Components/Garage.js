import React from 'react';import Hello from './Hello';

const Garage = () => {
  //   const initial = 'G';

  const car_info = {
    brand: 'lamborghini',
    color: 'Black',
    speed: 450,
  };

  return (
    <div>
      {/* <h1>My Name</h1> */}
      {/* props  */}
      {/* <Hello
        initial={initial}
        age={'26'}
      /> */}

      <Hello carInfo={car_info} />

      {/* we can add props directly line age={'26'} */}
      {/* initial is  user defined attribute  */}
    </div>
  );
};

export default Garage;
