import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import {
  // Button,
  // Plus,
  NBreak
  // Add,
  // Achieve,
  // Reject,
  // Clarifications,
  // InProgress,
  // Withdrawn,
  // Draft,
  // Dashboard,
  // Admin,
  // Team,
  // Settings
} from "./../../atoms";
import NavigationItem from "./../../molecules/navigation-item";

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
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBody>
          <NBreak />
          <NavigationItem
            type={1}
            to="/dashboard"
            count={41}
            name="Phones"
            active={true}
            // icon={<Add active={true} />}
          />
          <NavigationItem
            type={1}
            to="/dashboard/approval"
            count={14}
            name="New Phones"
            active={false}
            // icon={<Achieve active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            count={31}
            name="Used Phones"
            active={false}
            // icon={<Reject active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Phones Repairs"
            active={false}
            // icon={<Clarifications active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Laptops"
            active={false}
            // icon={<InProgress active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            count={41}
            name="Tablets"
            active={false}
            // icon={<Add active={false} />}
          />
          {/* <NBreak>Categories</NBreak> */}
          <NavigationItem
            type={1}
            to="/home"
            count={14}
            name="Television"
            active={false}
            // icon={<Achieve active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Accessories"
            active={false}
            // icon={<Withdrawn active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Others"
            active={false}
            // icon={<Draft active={false} />}
          />
        </NavBody>
      </>
    );
  }
}

export default LeftNavigation;
