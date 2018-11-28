import React, { Component } from 'react';
import {
  ModalOverLay,
  ModalContent,
  ModalClose,
  ModalHeader,
  ModalSpacing,
  ModalBody,
  ModalFooter,
} from './../../atoms/modal';
import { Heading, RowLayout, Left, CompanyLogo, Button } from './../../atoms';

import styled from 'styled-components';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    this.props.isClose(false);
  };

  render() {
    const HeaddingSpace = styled.div`
      margin-top: 8px;
    `;

    return (
      <ModalOverLay isOpen={this.props.isOpen}>
        <ModalContent isOpen={this.props.isOpen}>
          <ModalHeader>
            <ModalSpacing>
              <RowLayout>
                <ModalClose onClick={this.props.openCloseModal}>
                  <Left />
                </ModalClose>
                <HeaddingSpace>
                  <Heading level={2} fontWeight={2}>
                    Change Request Management
                  </Heading>
                </HeaddingSpace>
              </RowLayout>
              <CompanyLogo size={45} />
            </ModalSpacing>
          </ModalHeader>
          <ModalBody>{this.props.children}</ModalBody>
          <ModalFooter isOpen={this.props.isOpen}>
            <HeaddingSpace>
              <ModalSpacing>
                <Button size="medium" onClick={() => alert()}>
                  Close
                </Button>
                <Button
                  size="medium"
                  colorful
                  // submit
                  onClick={() => alert()}
                >
                  APPROVAL
                </Button>
              </ModalSpacing>
            </HeaddingSpace>
          </ModalFooter>
        </ModalContent>
      </ModalOverLay>
    );
  }
}

export default ModalView;
