import React from 'react';

const CounterFunction = (props) => {
  const [counter, setCounter] = React.useState(0);

  //  mounting phase
  React.useEffect(() => {
    console.log('mounting phase');

    //    unmounting phase
    return () => {
      console.log('unmounting phase');
    };
  }, []);

  //  general update phase (after the update)
  //   React.useEffect(() => {
  //     console.log('general update');
  //   });

  //  specific update phase (after the update)
  React.useEffect(() => {
    console.log('specific update: counter', counter);
  }, [counter]);

  const increment = () => {
    setCounter((c) => c + 1);
    console.log('after the increment', counter);
  };

  return (
    <>
      <h3>Counter Function: {counter}</h3>
      <button className='btn btn-primary btn-sm' onClick={increment}>
        Increment
      </button>
    </>
  );
};

export default CounterFunction;
