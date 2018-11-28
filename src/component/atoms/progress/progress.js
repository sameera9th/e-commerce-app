import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const setProgress = ({ progress }) => `${progress}%`;

const style = css`
  width: ${setProgress};
  height: 10px;
  background-color: ${palette('primary', 0, true)};
  border-radius: 10px 0px 0px 10px;
  display: block;
`;

const Style = styled.div`
  ${style};
`;

const Progress = ({ children, progress }) => {
  return <Style progress={progress}>{children}</Style>;
};
Progress.defaultProps = {
  progress: '5%',
};
export { Progress };
