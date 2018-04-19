import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyPage extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

ReactDOM.render(<MyPage />, document.getElementById('target'));
