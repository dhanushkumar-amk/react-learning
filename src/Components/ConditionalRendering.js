import React from 'react';
import Hello from './Hello';

const Garage = () => {
  //   const initial = 'G';

  const car_info = {
    // brand: 'lamborghini',
    // color: 'Black',
    // speed: 450,
  };

  return (
    <div>
      {/* <h1>My Name</h1> */}
      {/* props  */}
      {/* <Hello
        initial={initial}
        age={'26'}
      /> */}
      {car_info.brand !== undefined ? <Hello carInfo={car_info} /> : null}
      {/* we can add props directly line age={'26'} */}
      {/* initial is  user defined attribute  */}
    </div>
  );

  //   {garage_Door ? (
  //     <h2>GarageDoor is opened </h2>
  //   ) : (
  //     <h2>GarageDoor is Closed</h2>
  //   )}
};

// {/* ! conditional rendering  */}
//       {/* {car_info.brand !== undefined ? <Hello carInfo={car_info} /> : null} */}

export default Garage;

// {
//   garage_Door ? <h2>GarageDoor is opened </h2> : <h2>GarageDoor is Closed</h2>;
// }
