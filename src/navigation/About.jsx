import React from 'react';
import { useParams } from 'react-router-dom';

const About = (props) => {
  const { id } = useParams();

  return (
    <>
      <h3>About Component: {id}</h3>
    </>
  );
};

export default About;
