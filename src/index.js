import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './ConfigStore';
import RootContainer from './containers/RootContainer/RootContainer';

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('target')
);
