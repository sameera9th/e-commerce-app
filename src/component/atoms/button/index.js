import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

function calcSize({ size, height, block }) {
  const buttonStyle = {};
  buttonStyle.width = `${block ? 100 : null}%`;
  switch (size) {
    case 'large':
      buttonStyle.fontSize = `${height / 55}rem`;
      buttonStyle.padding = '15px 22px 15px 22px';
      break;
    case 'medium':
      buttonStyle.fontSize = `${height / 60}rem`;
      buttonStyle.padding = '12px 20px 12px 20px';
      break;
    case 'small':
      buttonStyle.fontSize = `${height / 65}rem`;
      buttonStyle.padding = '8px 15px 8px 15px';
      break;
    default:
      buttonStyle.fontSize = `${height / 50}rem`;
      buttonStyle.padding = '10px';
      break;
  }
  return buttonStyle;
}

const setBackgroundColor = ({ colorful, buttonType }) => {
  if (colorful && buttonType === 'primary') {
    return palette('primary', 0, true);
  } else if (colorful && buttonType === 'info') {
    return palette('info', 2, true);
  } else if (colorful && buttonType === 'success') {
    return palette('success', 2, true);
  } else if (colorful && buttonType === 'danger') {
    return palette('danger', 2, true);
  } else {
    return palette('white', 1, true);
  }
};

const setHoverBackgroundColor = ({ colorful, buttonType }) => {
  if (colorful && buttonType === 'primary') {
    return palette('primary', 1, true);
  } else if (colorful && buttonType === 'info') {
    return palette('info', 3, true);
  } else if (colorful && buttonType === 'success') {
    return palette('success', 3, true);
  } else if (colorful && buttonType === 'danger') {
    return palette('danger', 3, true);
  } else {
    return palette('white', 0, true);
  }
};

const setColor = ({ transparent, colorful, buttonType }) => {
  if (transparent && buttonType === 'primary') {
    return palette('primary', 0, true);
  } else if (transparent && buttonType === 'info') {
    return palette('info', 2, true);
  } else if (transparent && buttonType === 'sucess') {
    return palette('info', 2, true);
  } else if (transparent && buttonType === 'danger') {
    return palette('danger', 2, true);
  } else if (colorful) {
    return palette('white', 1, true);
  } else {
    return palette('grayscale', 1, true);
  }
};

const setHoverColor = ({ transparent, colorful, buttonType }) => {
  if (transparent && buttonType === 'primary') {
    return palette('primary', 1, true);
  } else if (transparent && buttonType === 'info') {
    return palette('info', 3, true);
  } else if (transparent && buttonType === 'sucess') {
    return palette('info', 3, true);
  } else if (transparent && buttonType === 'danger') {
    return palette('danger', 3, true);
  } else if (colorful) {
    return palette('white', 1, true);
  } else {
    return palette('grayscale', 1, true);
  }
};

const getBoxShadow = ({ boxShadow }) => {
  if (boxShadow === true) {
    return '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
  } else {
    return 0;
  }
};

const styleCommon = props => css`
  background-color: ${setBackgroundColor};
  color: ${setColor};
  font-size: ${calcSize(props).fontSize};
  padding: ${calcSize(props).padding};
  border-radius: 30px;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  font-weight: bold;
  overflow: hidden;
  border: 0px;
  box-shadow: ${getBoxShadow};
  cursor: pointer;
  width: ${calcSize(props).width};
  transition: all 250ms ease-out, color 250ms ease-out;
  &:focus {
    outline: none;
    overflow: hidden;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
    transition-delay: 0s;
  }
  &:hover {
    background-color: ${setHoverBackgroundColor};
    color: ${setHoverColor};
  }
`;

const Default = styled.button`
  ${styleCommon};
`;

const Button = ({
  onClick,
  submit,
  colorful,
  transparent,
  buttonType,
  disabled,
  size,
  block,
  children,
  height,
  boxShadow,
}) => {
  return (
    <Default
      type={submit ? 'submit' : 'button'}
      buttonType={buttonType}
      colorful={colorful}
      transparent={transparent}
      disabled={disabled}
      size={size}
      block={block}
      onClick={onClick}
      height={height}
      boxShadow={boxShadow}
    >
      {children}
    </Default>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.number,
  buttonType: PropTypes.string,
  colorful: PropTypes.bool,
  transparent: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.string,
  submit: PropTypes.bool,
  boxShadow: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  height: 50,
  buttonType: 'primary',
  colorful: false,
  transparent: false,
  block: false,
  size: 'small',
  submit: false,
  boxShadow: true,
};

export { Button };
