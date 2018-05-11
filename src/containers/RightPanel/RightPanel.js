//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Match } from 'redux-router-middleware';

import Iframe from '../../components/Iframe/Iframe';
import style from './RightPanel.css';
import AsyncRenderingExample from '../../react16-examples/AsyncRenderingExample/AsyncRenderingExample';

class RightPanel extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className={style.rightPanel}>
        <Match name={'errorBoundaries'} isExactly={true}>
          <Iframe url={'/examples/react16/errorBoundariesExample'} />
        </Match>
        <Match name={'asyncRendering'} isExactly={true}>
          <AsyncRenderingExample />
        </Match>
        <Match name={'fragment'} isExactly={true}>
          <Iframe url={'/examples/react16/fragmentExample'} />
        </Match>
        <Match name={'portal'} isExactly={true}>
          <Iframe url={'/examples/react16/portalExample'} />
        </Match>
      </div>
    );
  }
}

export default RightPanel;
