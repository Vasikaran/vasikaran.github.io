//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import CustomCodeMirror from '../../components/CustomCodeMirror/CustomCodeMirror';

import FragmentList from '../components/FragmentList/FragmentList';
import style from './FragmentExample.css';

let list = ['React', 'Webpack', 'Modern JS', 'Chrome', 'Browsers', 'Node JS'];

class FragmentExample extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <div className={style.wrapperFE}>
          <div className={style.rootFEExample}>
            <FragmentList list={list} />
          </div>
          <div className={style.editorFE}>
            <CustomCodeMirror
              apiUrl={
                '/src/react16-examples/components/FragmentList/FragmentList.js'
              }
              title={'FragmentList.js'}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FragmentExample;
