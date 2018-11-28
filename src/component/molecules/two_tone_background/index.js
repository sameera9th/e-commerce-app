import React from 'react';
import { Body, Side } from './../../atoms/two_tone';

const TwoToneBackground = ({ children }) => {
  return (
    <>
      {children}
      <Side />
      <Body />
    </>
  );
};

export default TwoToneBackground;
