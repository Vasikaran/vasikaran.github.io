//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ContainerBox.css';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

class Box extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { children, throwError, errorMsg } = this.props;
    if (throwError) {
      throw new Error(errorMsg);
    }
    return children;
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  Box.propTypes = {
    children: PropTypes.node.isRequired,
    throwError: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired
  };
}

class ContainerBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      needError: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleClick() {
    this.setState({ needError: true });
  }

  render() {
    let { children, errorMsg, errorPageMsg } = this.props;
    let { needError } = this.state;
    return (
      <div className={style.containerBox}>
        <ErrorBoundary message={errorPageMsg} containerHeight={300}>
          <Box throwError={needError} errorMsg={errorMsg}>
            <button className={style.button} onClick={this.handleClick}>
              Throw error
            </button>
            {children}
          </Box>
        </ErrorBoundary>
      </div>
    );
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  ContainerBox.propTypes = {
    children: PropTypes.node.isRequired,
    errorMsg: PropTypes.string.isRequired,
    errorPageMsg: PropTypes.string.isRequired
  };
}

export default ContainerBox;
