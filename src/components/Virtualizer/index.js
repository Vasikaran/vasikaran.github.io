import React from 'react';
import PropTypes from 'prop-types';

import style from './Virtualizer.css';

export default class Virtualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderableChildren: [],
      rowCount: props.rowCount,
      from: 0,
      to: props.rowCount
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.getScrollPercentage = this.getScrollPercentage.bind(this);
    this.updateControlledChildren = this.updateControlledChildren.bind(this);

    this.lastScrollTop = 0;
    this.isLastDirectionDown = true;

    this.tempDisable = false;
  }

  shouldComponentUpdate() {
    return true;
  }

  getScrollPercentage(isDown, element) {
    let { scrollTop, scrollHeight, clientHeight } = element;
    let currentHeight = isDown ? scrollTop + clientHeight : scrollTop;
    return currentHeight / scrollHeight * 100;
  }

  handleScroll(event) {
    let { target } = event;

    let { scrollTop } = target;
    let { fetchPercentage } = this.props;
    let isDown = (this.isLastDirectionDown = this.lastScrollTop <= scrollTop);
    this.lastScrollTop = scrollTop;
    let { top, bottom } = fetchPercentage;

    let scrollPercentage = this.getScrollPercentage(isDown, target);

    if (
      (isDown && scrollPercentage >= bottom) ||
      (!isDown && scrollPercentage <= top)
    ) {
      let { from, to, rowCount } = this.state;
      let halfSize = rowCount / 2;
      if (isDown) {
        from += halfSize;
      } else {
        from -= halfSize;
      }
      from = from < 0 ? 0 : from;
      to = from + rowCount;
      this.setState({ from, to });
    }
  }

  updateControlledChildren() {
    if (!this.tempDisable) {
      let { renderList } = this.props;
      let { from, to } = this.state;

      let renderableChildren = renderList(from, to);
      this.tempDisable = true;
      this.setState({ renderableChildren });
    } else {
      this.tempDisable = false;
    }
  }

  componentWillMount() {
    this.updateControlledChildren();
  }

  componentWillUpdate() {
    this.updateControlledChildren();
  }

  render() {
    let { renderableChildren } = this.state;
    return (
      <div onScroll={this.handleScroll} className={style.container}>
        {renderableChildren}
      </div>
    );
  }
}

Virtualizer.defaultProps = {
  fetchPercentage: {
    top: 10,
    bottom: 90
  }
};

Virtualizer.propTypes = {
  renderList: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
  fetchPercentage: PropTypes.object
};
