import React from 'react';

class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log('constructor');

    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  increment() {
    this.setState((s, p) => {
      return {
        counter: s.counter + 1,
      };
    });
  }

  render() {
    console.log('render');
    return (
      <>
        <h3>Counter Class Component: {this.state.counter}</h3>
        <p>{this.props.message}</p>
        <button className='btn btn-primary' onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default CounterClass;
