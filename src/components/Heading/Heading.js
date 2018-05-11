//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Heading.css';

class Heading extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleClick() {
    let { url, handleClick } = this.props;
    handleClick(url);
  }

  render() {
    let { content, isSelected } = this.props;
    return (
      <div
        className={
          isSelected ? `${style.heading} ${style.selected}` : style.heading
        }
        onClick={this.handleClick}
      >
        <span className={style.content}>{content}</span>
      </div>
    );
  }
}

Heading.defaultProps = {
  isSelected: false
};

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  Heading.propTypes = {
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    handleClick: PropTypes.func.isRequired
  };
}

export default Heading;
