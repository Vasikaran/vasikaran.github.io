//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ContainerBox from '../../components/ContainerBox/ContainerBox';
import style from './RightContainerBox.css';

class RightContainerBox extends Component {
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
          errorMsg={'Error occured in RightContainerBox'}
          errorPageMsg={'Something went wrong when render RightContainerBox'}
        >
          <div className={style.text}>
            {'Right Container Box now rendering'}
          </div>
        </ContainerBox>
      </React.Fragment>
    );
  }
}

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  RightContainerBox.propTypes = {};
}

export default RightContainerBox;
