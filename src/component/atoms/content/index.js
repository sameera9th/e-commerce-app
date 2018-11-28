import React from 'react';
import styled, { css } from 'styled-components';
// import { palette } from "styled-theme";

const style = css`
  margin-left: 260px;
  margin-top: 62px;
  z-index: -99 !important;
  padding: 30px;
  overflow: hidden;
  background: #fff;
`;

const ContentStyle = styled.div`
  ${style};
`;

const Content = ({ children }) => {
  return <ContentStyle>{children}</ContentStyle>;
};

export { Content };
