import React from "react";
import Link from "react-router-dom/Link";
import styled, { css } from "styled-components";
import { palette } from "styled-theme";

const weight = () => palette("weight", 3, true);
const fontSize = ({ height }) => `${height / 55}rem`;
const color = ({ color }) => palette("grayscale", 4, true);

const styles = css``;

const Links = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  font-weight: ${weight};
  font-size: ${fontSize};
  color: ${color};
`;

const Btn = styled.div`
  display: inline-flex;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  color: red;
`;

const StyledLink = styled(
  ({ disabled, transparent, height, theme, color, children, to }) => (
    <Links
      theme={theme}
      color={color}
      disabled={disabled}
      transparent={transparent}
      height={height}
      to={to}
    >
      {children}
    </Links>
  )
)`
  ${styles};
`;

const StyledButton = styled(
  ({ disabled, transparent, height, theme, color, children, to }) => (
    <Btn
      theme={theme}
      color={color}
      disabled={disabled}
      transparent={transparent}
      height={height}
      to={to}
    >
      {children}
    </Btn>
  )
)`
  ${styles};
`;

const LinkButton = ({ children, to }) => {
  if (to === null) {
    return <StyledButton to={to}>{children} </StyledButton>;
  } else {
    return <StyledLink to={to}>{children} </StyledLink>;
  }
};

LinkButton.defaultProps = {
  height: 40,
  color: palette("grayscale", 4, true)
};

export { LinkButton };
