import * as React from 'react';
import Demo from './Demo';

const Sample = (props) => {
  return (
    <>
      <h4>Sample Component</h4>
      <Demo>
        <h4>Header comes here</h4>
        <p>Hello there!</p>
      </Demo>
    </>
  );
};

export default Sample;
