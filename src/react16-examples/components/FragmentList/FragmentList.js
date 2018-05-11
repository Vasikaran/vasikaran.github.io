//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './FragmentList.css';

class FragmentList extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { list } = this.props;
    return (
      <React.Fragment>
        {list.map((item, index) => (
          <div className={style.fragmentItem} key={index}>
            {item}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  FragmentList.propTypes = {
    list: PropTypes.array.isRequired
  };
}

export default FragmentList;
