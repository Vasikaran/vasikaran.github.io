//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './PortalPopup.css';

class PortalPopup extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { x, y } = this.props;
    if (!x && !y) {
      return null;
    }
    return (
      <div
        className={style.popup}
        style={{ left: `${x - 170}px`, top: `${y - 150}px` }}
      >
        <div>{`X - ${x}`}</div>
        <div>{`Y - ${y}`}</div>
      </div>
    );
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  PortalPopup.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  };
}

export default PortalPopup;
