import React from "react";
import Company from "./../../molecules/company";
// import SettingsDropdown from '../../../molecules/dropdown';
import styled from "styled-components";
import { palette } from "styled-theme";
import { Row, Col } from "./../../atoms/grid";
import Search from "./../../molecules/search";

const NavBody = styled.div`
  padding: 3px 20px 5px 20px;
  border-bottom: 1px solid ${palette("grayscale", 0, true)};
  ${"" /* ${"" /* display: flex; */}
  ${"" /* flex-direction: row; */}
  ${"" /* justify-content: space-between; */} */}
  height: 80px;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  top: 0px;
  position: fixed;
  width: 100%;
  background-color: #fff;
`;

class TopNavigation extends React.Component {
  render() {
    return (
      <NavBody>
        <Row>
          <Col className="col-md-2">
            <Company />
          </Col>
          <Col className="col-md-4">
            <Search />
          </Col>
        </Row>
      </NavBody>
    );
  }
}

export default TopNavigation;
