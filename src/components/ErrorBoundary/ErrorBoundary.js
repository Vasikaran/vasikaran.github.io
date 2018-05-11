//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidCatch(error) {
    //eslint-disable-next-line
    console.log(error);
    this.setState({
      hasError: true
    });
  }

  render() {
    let { hasError } = this.state;
    if (hasError) {
      let { message } = this.props;
      return (
        <div className={style.errorBox}>
          <div className={style.text}>{message}</div>
        </div>
      );
    }
    let { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    message: PropTypes.string.isRequired
  };
}

export default ErrorBoundary;
