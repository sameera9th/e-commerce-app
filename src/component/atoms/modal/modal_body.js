import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

class ModalBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenHeight: null };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenHeight: window.innerHeight });
  }

  render() {
    const height = this.props.size
      ? 'auto'
      : this.state.screenHeight - 120 + 'px';

    const Body = styled.div`
      background-color: ${
        this.props.white === true
          ? palette('white', 1, true)
          : palette('white', 3, true)
      };
      height: ${height}
      overflow-y: scroll;
      padding: 25px 25px 15px 25px;
      z-index : 999999999999993

    `;

    return <Body>{this.props.children}</Body>;
  }
}
ModalBody.defaultProps = {
  white: palette('white', 4, true),
};
export { ModalBody };
