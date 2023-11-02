import React from 'react';
import Navbar from './navigation/Navbar';
import Routes from './navigation/Routes';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = (props) => {
  return (
    <>
      <Navbar />
      <div className='p-5'>
        <Routes />
      </div>
      <ReactQueryDevtools position='bottom-right' />
    </>
  );
};

export default App;
