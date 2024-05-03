import React from 'react';
// import Basic from './Components/Basic';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
// import Hello from './Components/Hello';
// import Garage from './Components/Garage';
import '../src/index.css';

const App = () => {
  return (
    <div className='app'>
      {/* <Garage /> */}
      {/* <Hello /> */}

      {/* <Basic /> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
