import React from 'react';import Hello from './Hello';

const Garage = () => {
  //   const initial = 'G';

  const carList = [
    {brand: 'BMW', color: 'red'},
    {brand: 'Ford', color: 'green'},
    {brand: 'Lamborghini', color: 'Black'},
  ];

  const car_info = {
    brand: 'lamborghini',
    color: 'Black',
    speed: 450,
  };
  const garage_Door = false;
  // const garage_Door = true;

  // const showCarInfo

  return (
    <div>
      {/* <h1>My Name</h1> */}
      {/* props  */}
      {/* <Hello
        initial={initial}
        age={'26'}
      /> */}

      <Hello carInfo={car_info} />

      {/* ! conditional rendering  */}
      {/* {car_info.brand !== undefined ? <Hello carInfo={car_info} /> : null} */}

      {/* we can add props directly line age={'26'} */}
      {/* initial is  user defined attribute  */}

      {/* ! conditional rendering  another example */}
      {garage_Door ? (
        <h2>GarageDoor is opened </h2>
      ) : (
        <h2>GarageDoor is Closed</h2>
      )}

      {/* list in react */}

      <ul>
        {carList.map(() => {
          return (
            <li>
              <Hello />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Garage;
