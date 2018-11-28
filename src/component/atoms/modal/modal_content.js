import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const size = ({ isOpen, size }) => `${isOpen === true ? size : 0}%`;
const topAndBotttomSpacing = ({ size, margin }) =>
  `${size === 100 ? 0 : margin ? margin : null}px`;
// const setBorder = ({ border }) =>
//   `${
//     border === true ? palette('grayscale', 0, true) : palette('white', 0, true)
//   }`;

const styles = css`
  background-color: #fff;
  position: absolute;
  width: ${size};
  transition: height 0.45s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 0px;
  top: ${topAndBotttomSpacing};
  bottom: ${topAndBotttomSpacing};
  border: 1px solid ${palette('grayscale', 0, true)};
`;
const ContentStyle = styled.div`
  ${styles};
`;

const ModalContent = ({ border, size, isOpen, children, margin }) => {
  return (
    <ContentStyle border={border} size={size} isOpen={isOpen} margin={margin}>
      {children}
    </ContentStyle>
  );
};

ModalContent.defaultProps = {
  size: 100,
  margin: 0,
  border: false,
};

export { ModalContent };
