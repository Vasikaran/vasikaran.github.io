//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './iframe.css';

class Iframe extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { url, children } = this.props;
    return (
      <React.Fragment>
        {children}
        <iframe src={url} className={style.iframe} frameBorder={'0'} />
      </React.Fragment>
    );
  }
}

Iframe.defaultProps = {
  children: null
};

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  Iframe.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node
  };
}

export default Iframe;
