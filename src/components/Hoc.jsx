import React from 'react';

const Hoc = (props) => {
  return (
    <>
      <h3>Render Props Demonstration</h3>
      {props.content('Jayant')}
    </>
  );
};

export default Hoc;
