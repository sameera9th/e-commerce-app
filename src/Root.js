import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainRouter from './MainRouter';
import theme from './themes/default';
import './Root.css';

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainRouter childProps={this.props} />
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.loggedInStatus,
  };
}

export default withRouter(connect(mapStateToProps)(Root));
