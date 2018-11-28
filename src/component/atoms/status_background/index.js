import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const setBorder = ({ type, border }) => {
  if (border === true) {
    switch (type) {
      case 'danger':
        return palette('danger', 0, true);
      case 'warning':
        return palette('warning', 0, true);
      case 'success':
        return palette('success', 0, true);
      case 'info':
        return palette('info', 0, true);
      default:
        return null;
    }
  } else {
    return 'transparent';
  }
};

const setBackground = ({ type, mood }) => {
  switch (type) {
    case 'danger':
      return palette('danger', mood === 'dark' ? 0 : 1, true);
    case 'warning':
      return palette('warning', mood === 'dark' ? 0 : 1, true);
    case 'success':
      return palette('success', mood === 'dark' ? 0 : 1, true);
    case 'info':
      return palette('info', mood === 'dark' ? 0 : 1, true);
    default:
      return null;
  }
};

const style = css`
  border-left: 2px solid ${setBorder};
  background-color: ${setBackground};
  border-right: 2px solid ${setBorder};
`;

const StatusStyle = styled.div`
  ${style};
`;

const StatusBackground = ({ type, mood, border, children }) => {
  return (
    <StatusStyle mood={mood} border={border} type={type}>
      {children}
    </StatusStyle>
  );
};

export { StatusBackground };
