import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { palette } from 'styled-theme';

const setBorder = ({ error }) =>
  error === true ? palette('primary', 4, true) : palette('grayscale', 0, true);

const bounce = keyframes`
0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
`;

const setAnimation = ({ error }) => (error === true ? bounce : null);

const style = css`
  position: relative;
  width: 100%;
  border: 1px solid ${setBorder};
  transition: background-color 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color , border;
  animation-name: ${setAnimation};
  animation-duration: .5s;
  animation-delay: 0.25s;
  border-radius: 3px;
  &:after{
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    padding: 10px 15px;
    display: block;
    width: calc(100% - 50px);
    pointer-events: none;
    cursor :pointer;
    z-index: 20;
    height: 40px;
    line-height: 40px;
    color: ${palette('white', 1, true)};;
    border : 1px solid #ddd;
  }
  &:before {
    content: 'Upload';
    position: absolute;
    top: 3px;
    right: 3px;
    display: inline-block;
    height: 40px;
    background: ${palette('grayscale', 1, true)};
    color: ${palette('white', 1, true)};
    z-index: 25;
    line-height: 40px;
    padding: 0 15px;
    text-transform: uppercase;
    pointer-events: none;
    cursor :pointer;
    border-radius: 0 3px 3px 0;
  }
  &:hover {
    &:before {
      background: ${palette('grayscale', 2, true)};
    }
 
`;

const UploadWrapperStyle = styled.div`
  ${style};
`;

const UploadWrapper = ({ error, children }) => {
  return <UploadWrapperStyle error={error}>{children}</UploadWrapperStyle>;
};
UploadWrapper.defaultProps = {
  height: 30,
  error: false,
};
export { UploadWrapper };
