//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UnControlled as ReactCodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/javascript/javascript.js';

import style from './CustomCodeMirror.css';

let options = {
  lineNumbers: true,
  readOnly: true,
  mode: 'javascript',
  theme: 'material'
};

class CustomCodeMirror extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: props.code
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { code } = this.state;
    let { title } = this.props;
    return (
      <React.Fragment>
        <span className={style.editorTitle}>{title}</span>
        <ReactCodeMirror value={code} options={options} />
      </React.Fragment>
    );
  }

  componentDidMount() {
    let { code } = this.state;
    if (code) {
      return;
    }
    let { apiUrl } = this.props;
    if (!apiUrl) {
      this.setState({ code: 'No code available' });
    }
    let client = new XMLHttpRequest();
    client.open('GET', apiUrl);
    client.onload = () => {
      this.setState({ code: client.responseText });
    };
    client.send();
  }
}

CustomCodeMirror.defaultProps = {
  code: ''
};

//eslint-disable-next-line no-undef
if (__DEVELOPMENT__) {
  CustomCodeMirror.propTypes = {
    apiUrl: PropTypes.string.isRequired,
    code: PropTypes.string,
    title: PropTypes.string.isRequired
  };
}

export default CustomCodeMirror;
