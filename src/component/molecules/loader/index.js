import React from 'react';
import styled from 'styled-components';

const LoaderStyle = styled.div`
  justify-content: center;
  aline-item: center;
  display: flex;
`;

const Loader = () => {
  return <LoaderStyle>Loading...</LoaderStyle>;
};
export default Loader;
