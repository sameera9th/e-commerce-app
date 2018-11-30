import React from "react";
import styled, { css } from "styled-components";
// import { palette } from "styled-theme";

const style = css`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  max-height: 350px;
  min-height: 350px;
  margin: 1rem;
  position: relative;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const ContentStyle = styled.div`
  ${style};
`;

const Card = ({ children }) => {
  return <ContentStyle>{children}</ContentStyle>;
};

export { Card };
