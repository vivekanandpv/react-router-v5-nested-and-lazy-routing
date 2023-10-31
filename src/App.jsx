import React from 'react';
import Navbar from './navigation/Navbar';
import Routes from './navigation/Routes';

const App = (props) => {
  return (
    <>
      <Navbar />
      <div className='p-5'>
        <Routes />
      </div>
    </>
  );
};

export default App;
