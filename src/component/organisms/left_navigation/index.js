import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import { NBreak } from "./../../atoms";
import NavigationItem from "./../../molecules/navigation-item";

import Phone from "./phones";
import LapTop from "./laptops";
import Tablets from "./tablets";
import Television from "./television";
import Accessories from "./accessories";
import Others from "./others";

const NavBody = styled.div`
  border: 1px solid ${palette("grayscale", 0, true)};
  width: 260px;
  height: 100%;
  position: fixed;
  top: 80px;
  left: 0;
  background-color: #fff;
  border-top: 0px;
`;

class LeftNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  collaps = () => {
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  };

  render() {
    return (
      <>
        <NavBody>
          <NBreak />
          <Phone />
          <LapTop />
          <Tablets />
          <Television />
          <Accessories />
          <Others />
          <NavigationItem
            type={2}
            to="/add-new"
            name="New Products"
            active={false}
          />
        </NavBody>
      </>
    );
  }
}

export default LeftNavigation;
