//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ContainerBox from '../../components/ContainerBox/ContainerBox';
import style from './LeftContainerBox.css';

class LeftContainerBox extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <ContainerBox
          errorMsg={'Error occured in LeftContainerBox'}
          errorPageMsg={'Something went wrong when render LeftContainerBox'}
        >
          <div className={style.text}>{'Left Container Box now rendering'}</div>
        </ContainerBox>
      </React.Fragment>
    );
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  LeftContainerBox.propTypes = {};
}

export default LeftContainerBox;
