import React, { Component } from 'react';
import { PopUpBox, ProfileAvatar } from './../../atoms';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const WripperBox = styled.div`
  position: relative;
`;

class SettingsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleClickOutside = evt => {
    this.setState({ isOpen: false });
  };
  open = () => {
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  };
  render() {
    return (
      <WripperBox>
        <div onClick={this.open}>
          <ProfileAvatar size={50} />
        </div>
        <PopUpBox isOpen={this.state.isOpen}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </PopUpBox>
      </WripperBox>
    );
  }
}
export default onClickOutside(SettingsDropdown);
