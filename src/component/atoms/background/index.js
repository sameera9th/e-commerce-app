import React from "react";
import styled, { css } from "styled-components";
import { palette } from "styled-theme";
import loaderImage from "./../../../images/1200px-Dialog_Axiata_logo.svg.png";

const getBackground = ({ bgImage }) => bgImage;

const style = css`
  display: flex;
  height: 220px;
  width: 100%;
  background: #ddd;
  ${"" /* background-image: `url({bgImage})`; */} margin: 0;
  background-position: center;
  background-size: cover;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const BackgroundStyle = styled.div`
  ${style};
`;

const Background = ({ children, bgImage }) => {
  return (
    <BackgroundStyle style={{ backgroundImage: `url(${bgImage})` }}>
      {children}
    </BackgroundStyle>
  );
};

export { Background };
