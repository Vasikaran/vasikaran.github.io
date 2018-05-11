//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import LeftContainerBox from '../containers/LeftContainerBox/LeftContainerBox';
import RightContainerBox from '../containers/RightContainerBox/RightContainerBox';
import CustomCodeMirror from '../../components/CustomCodeMirror/CustomCodeMirror';

import style from './ErrorBoundariesExample.css';

class ErrorBoundariesExample extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className={style.rootEB}>
        <LeftContainerBox />
        <RightContainerBox />
        <div className={style.editorRootEB}>
          <CustomCodeMirror
            apiUrl={'/src/components/ErrorBoundary/ErrorBoundary.js'}
            title={'ErrorBoundary.js'}
          />
        </div>
        <div className={style.editorRootEB}>
          <CustomCodeMirror
            apiUrl={
              '/src/react16-examples/components/ContainerBox/ContainerBox.js'
            }
            title={'ContainerBox.js'}
          />
        </div>
      </div>
    );
  }
}

export default ErrorBoundariesExample;
