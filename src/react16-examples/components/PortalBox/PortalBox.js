//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './PortalBox.css';

class PortalBox extends Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleMouseMove(event) {
    let { updateMouseCoordinates } = this.props;
    event.persist();
    let { screenX: x, screenY: y } = event;
    updateMouseCoordinates(x, y);
  }

  handleMouseOut() {
    let { updateMouseCoordinates } = this.props;
    updateMouseCoordinates(0, 0);
  }

  render() {
    return (
      <div
        className={style.portalBox}
        onMouseMove={this.handleMouseMove}
        onMouseOut={this.handleMouseOut}
      >
        <div>{'Hover me! I will show your cursor location'}</div>
        <img className={style.emoji} src={'/src/icons/wink.png'} />
      </div>
    );
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  PortalBox.propTypes = {
    updateMouseCoordinates: PropTypes.func.isRequired
  };
}

export default PortalBox;
