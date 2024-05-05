import React from 'react';
import Home from './ReactRouterConcept/Home';
import About from './ReactRouterConcept/About';
import Contact from './ReactRouterConcept/Contact';
// import Basic from './Components/Basic';
// import Header from './Components/Header';
// import Content from './Components/Content';
// import Footer from './Components/Footer';
// import Hello from './Components/Hello';
// import Garage from './Components/Garage';
// import '../src/index.css';
// import ReactForm from './components1/ReactForm';
// import Content1 from './Components/Content1';
// import Header5 from './Components/Header5';
// import States from './components1/States';
// import UseState from './components1/UseState';
// import Liat from './components1/Liat';
// import UseStateArray from './components1/UseStateArray';
// import UseEffectHook from './components1/UseEffectHook';
// import Content2 from './Content2';

// import cssHeader from './Components/cssHeader';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import UserPage from './ReactRouterConcept/UserPage';

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
      {/* <UseState /> */}
      {/* <Liat /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffectHook /> */}
      {/* <Footer /> */}

      {/* <ReactForm /> */}

      {/* ?Router Concept */}

      {/* <Home />
      <About />
      <Contact /> */}

      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/user/1'>User1</Link>
          </li>
          <li>
            <Link to='/user/6080'>User2</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/user/:id'
            element={<UserPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
