import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { palette } from "styled-theme";
import { ifProp } from "styled-tools";

const setBorder = ({ error }) =>
  error === true ? palette("primary", 4, true) : palette("grayscale", 0, true);
const setBackground = ({ error, disabled }) =>
  error === true
    ? palette("rgbascale", 1, true)
    : palette("white", disabled === true ? 0 : 1, true);
const fontSize = ({ height }) => `${height / 6.5555555556}rem`;
const setCursor = ({ disabled }) =>
  `${disabled === true ? "not-allowed" : "auto"}`;
const setOpacity = ({ type }) => `${type === "file" ? 0 : 1}`;

const setHeight = ({ type }) => `${type === "textarea" ? 100 : 42}px`;

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

const styles = css`
  padding: 15px;
  ${"" /* box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1); */}
  border: 1px solid ${setBorder};
  width: 100%;
  height:${setHeight};
  box-sizing: border-box;
  color: ${palette("grayscale", 1, true)};
  font-size:${fontSize};
  outline: 0;
  border-radius: 3px;
  cursor: ${setCursor};
  background-color: ${setBackground};
  resize : ${ifProp({ type: "textarea" }, "vertical", "auto")};
  min-height : ${ifProp({ type: "textarea" }, "60px", "auto")};
  opacity : ${setOpacity};
  transition: background-color 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color , border;
  animation-name: ${setAnimation};
  animation-duration: .5s;
  animation-delay: 0.25s;
  &::placeholder { 
    color: ${palette("grayscale", 1, true)};
    opacity: 0.4; 
  }
`;

const StyledTextarea = styled.textarea`
  ${styles};
`;

const StyledInput = styled.input`
  ${styles};
`;

class Input extends Component {
  render() {
    const {
      type,
      label,
      autoFocus,
      value,
      name,
      disabled,
      placeholder,
      onChange,
      height,
      error
    } = this.props;
    const Input = type === "textarea" ? StyledTextarea : StyledInput;
    return (
      <Input
        type={type || "text"}
        autoFocus={autoFocus}
        value={value}
        name={name}
        disabled={disabled}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder ? placeholder : label}
        height={height}
        error={error}
      />
    );
  }
}

Input.defaultProps = {
  height: 32,
  error: false
};
export { Input };
