import React from 'react';
// import Basic from './Components/Basic';
import Header from './Components/Header';
// import Content from './Components/Content';
import Footer from './Components/Footer';
// import Hello from './Components/Hello';
// import Garage from './Components/Garage';
import '../src/index.css';
import Content1 from './Components/Content1';
import Header5 from './Components/Header5';
import States from './components1/States';
import UseState from './components1/UseState';
// import Content2 from './Content2';

// import cssHeader from './Components/cssHeader';

const App = () => {
  return (
    <div className='app'>
      {/* <Garage /> */}
      {/* <Hello /> */}

      {/* <Basic /> */}
      {/* title is a props */}

      {/* <Header /> */}
      {/* title='Dhanushkumar' */}

      {/* <Content1 /> */}

      {/* <Header5 /> */}
      {/* <Content1 /> */}
      {/* <States /> */}
      <UseState />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
