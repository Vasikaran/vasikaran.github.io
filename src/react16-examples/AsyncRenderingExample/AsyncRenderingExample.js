//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import Iframe from '../../components/Iframe/Iframe';

class AsyncRenderingExample extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <Iframe url={'https://build-mbfootjxoo.now.sh/'}>
          <h3 style={{ fontFamily: 'sans-serif' }}>
            {
              'Look at the top right corner animated box while change the rendering phase'
            }
          </h3>
        </Iframe>
      </React.Fragment>
    );
  }
}

export default AsyncRenderingExample;
