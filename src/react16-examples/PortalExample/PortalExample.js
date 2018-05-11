//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CustomCodeMirror from '../../components/CustomCodeMirror/CustomCodeMirror';

import PortalBox from '../components/PortalBox/PortalBox';
import PortalPopup from '../components/PortalPopup/PortalPopup';
import style from './PortalExample.css';

const portalTarget = document.getElementById('portalTarget');

class PortalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };

    this.updateMouseCoordinates = this.updateMouseCoordinates.bind(this);
  }

  updateMouseCoordinates(x, y) {
    this.setState({ x, y });
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { x, y } = this.state;
    return (
      <React.Fragment>
        <PortalBox updateMouseCoordinates={this.updateMouseCoordinates} />
        {ReactDOM.createPortal(<PortalPopup x={x} y={y} />, portalTarget)}
        <div className={style.editorRootPortal}>
          <CustomCodeMirror
            apiUrl={'/src/react16-examples/PortalExample/PortalExample.js'}
            title={'PortalExample.js'}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PortalExample;
