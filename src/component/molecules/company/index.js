import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../../store/reducers/auth/action";
import { CompanyLogo, Heading, RowLayout } from "./../../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px;
  margin-top: 8px;
`;
const Name = styled.div`
  margin-top: 18px;
  margin-left: 20px;
`;

class Company extends Component {
  logout = () => {
    this.props.logoutUser();
    this.props.history.push("/login");
  };

  render() {
    return (
      <Wrapper>
        <RowLayout onClick={this.logout.bind(this)}>
          <CompanyLogo size={55} />
          <Name>
            <Heading level={3} fontWeight={2} grayScale={1}>
              CART
            </Heading>
          </Name>
        </RowLayout>
      </Wrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Company)
);
