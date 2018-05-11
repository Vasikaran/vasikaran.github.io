//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Match } from 'redux-router-middleware';

import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import {
  AsyncErrorBoundariesExample,
  AsyncFragmentExample,
  AsyncPortalExample
} from '../AsyncContainers';

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { headings } = this.props;
    return (
      <React.Fragment>
        <Match name={'home'} isExactly={true}>
          <div>
            <a href={'/page/react16'}>
              <button>{'React 16'}</button>
            </a>
          </div>
        </Match>
        <Match name={'react16'} isExactly={false}>
          <React.Fragment>
            <LeftPanel headings={headings} />
            <RightPanel />
          </React.Fragment>
        </Match>
        <Match name={'errorBoundariesExample'} isExactly={true}>
          <AsyncErrorBoundariesExample />
        </Match>
        <Match name={'fragmentExample'} isExactly={true}>
          <AsyncFragmentExample />
        </Match>
        <Match name={'portalExample'} isExactly={true}>
          <AsyncPortalExample />
        </Match>
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => {
  let { headings } = state;
  return { headings };
};

RootContainer.defaultProps = {
  headings: []
};

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  RootContainer.propTypes = {
    headings: PropTypes.array
  };
}

export default connect(mapStateToProps, {})(RootContainer);
