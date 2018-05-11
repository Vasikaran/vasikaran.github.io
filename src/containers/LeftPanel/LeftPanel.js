//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'redux-router-middleware';

import Heading from '../../components/Heading/Heading';
import style from './LeftPanel.css';

class LeftPanel extends Component {
  constructor(props) {
    super(props);

    this.handleHeadingClick = this.handleHeadingClick.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleHeadingClick(url) {
    let { push } = this.props;
    push({ pathname: url });
  }

  render() {
    let { headings, currentUrl } = this.props;
    return (
      <div className={style.leftPanel}>
        {headings.map((heading, index) => {
          let { content, url } = heading;
          return (
            <Heading
              key={index}
              content={content}
              url={url}
              isSelected={currentUrl === url}
              handleClick={this.handleHeadingClick}
            />
          );
        })}
      </div>
    );
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  LeftPanel.propTypes = {
    headings: PropTypes.array.isRequired,
    currentUrl: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired
  };
}

let mapStateToProps = state => {
  let { routing } = state;
  return {
    currentUrl: Object.keys(routing.urls).reduce((currentUrl, key) => {
      let nextUrl = routing.urls[key];
      if (nextUrl.match === 2) {
        return nextUrl.pattern;
      }
      return currentUrl;
    }, '')
  };
};

export default connect(mapStateToProps, { push })(LeftPanel);
