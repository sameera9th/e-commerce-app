import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

const StepProgressItem = ({ active, number, children }) => {
  const style = css`
    position: relative;
    color : ${palette('grayscale', 1, true)}
    font-weight : ${palette('weight', 3, true)}
    font-size :13px;
    padding-top:3px;
    counter-increment: list;
    :not(:last-child) {
      padding-bottom: 30px;
    }
    ::before {
      display: inline-block;
      content: "";
      position: absolute;
      left: -30px;
      height: 100%;
      width: 10px;
      color : ${
        active === true
          ? palette('primary', 0, true)
          : palette('grayscale', 0, true)
      }
      border-left: 2px solid ${
        active === true
          ? palette('primary', 0, true)
          : palette('grayscale', 0, true)
      }
    }
    ::after {
        color : ${
          active === true
            ? palette('white', 0, true)
            : palette('grayscale', 2, true)
        }
      content: " ${number} ";
      display: inline-block;
      position: absolute;
      top: 0;
      left: -41px;
      width: 24px;
      height: 24px;
      border: 2px solid ${
        active === true ? palette('white', 2, true) : palette('white', 2, true)
      };
      border-radius: 50%;
      background-color: ${
        active === true
          ? palette('primary', 0, true)
          : palette('grayscale', 0, true)
      };
      display: flex;
      justify-content: center;
      aline-item: center;
      font-size:12px;
      padding-top:2px;
      
    }
  `;
  const StepProgress = styled.li`
    ${style};
  `;

  return (
    <StepProgress active={active} number={number}>
      {children}
    </StepProgress>
  );
};

export { StepProgressItem };
