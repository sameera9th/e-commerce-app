import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import {
  Button,
  Plus,
  NBreak,
  Add,
  Achieve,
  Reject,
  Clarifications,
  InProgress,
  Withdrawn,
  Draft,
  Dashboard,
  Admin,
  Team,
  Settings
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
const MainButton = styled.div`
  display :flex
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom:30px;
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
          <NBreak>Main</NBreak>
          <NavigationItem
            type={1}
            to="/dashboard"
            count={41}
            name="New Request"
            active={true}
            // icon={<Add active={true} />}
          />
          <NavigationItem
            type={1}
            to="/dashboard/approval"
            count={14}
            name="Approval"
            active={false}
            // icon={<Achieve active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            count={31}
            name="Reject"
            active={false}
            // icon={<Reject active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Clarification"
            active={false}
            // icon={<Clarifications active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="In Progress"
            active={false}
            // icon={<InProgress active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            count={41}
            name="Request"
            active={false}
            // icon={<Add active={false} />}
          />
          <NBreak>categories</NBreak>
          <NavigationItem
            type={1}
            to="/home"
            count={14}
            name="Approval"
            active={false}
            // icon={<Achieve active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Withdrawn"
            active={false}
            // icon={<Withdrawn active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Draft"
            active={false}
            // icon={<Draft active={false} />}
          />
        </NavBody>
      </>
    );
  }
}

export default LeftNavigation;
