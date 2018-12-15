import React from "react";
import styled from "styled-components";

const display = ({ isOpen }) => (isOpen === true ? "block" : "none");

const CollapsStyle = styled.div`
  display: ${display};
`;

const NavCollaps = ({ children, isOpen }) => {
  console.log("------------", isOpen);

  return <CollapsStyle isOpen={isOpen}>{children}</CollapsStyle>;
};
export { NavCollaps };
