import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routing, historyMiddleware } from 'redux-router-middleware';

import { PromiseMiddleware } from './middlewares';
import * as reducers from './reducers';

import { getHeadingNames } from './api';

let history = createHistory();

let urls = [
  {
    name: 'home',
    pattern: '/'
  },
  {
    name: 'react16',
    pattern: '/page/react16'
  },
  {
    name: 'errorBoundaries',
    pattern: '/page/react16/errorBoundaries'
  },
  {
    name: 'errorBoundariesExample',
    pattern: '/examples/react16/errorBoundariesExample'
  },
  {
    name: 'asyncRendering',
    pattern: '/page/react16/asyncRendering'
  },
  {
    name: 'asyncRenderingExample',
    pattern: '/examples/react16/asyncRenderingExample'
  },
  {
    name: 'fragment',
    pattern: '/page/react16/fragment'
  },
  {
    name: 'fragmentExample',
    pattern: '/examples/react16/fragmentExample'
  },
  {
    name: 'portal',
    pattern: '/page/react16/portal'
  },
  {
    name: 'portalExample',
    pattern: '/examples/react16/portalExample'
  },
  {
    name: 'intro',
    pattern: '/page/react16/intro'
  }
];

//eslint-disable-next-line no-undef
let enhancer = __DEVELOPMENT__
  ? applyMiddleware(
    PromiseMiddleware,
    historyMiddleware(history),
    createLogger({ collapsed: true })
  )
  : applyMiddleware(PromiseMiddleware, historyMiddleware(history));

let combinedReducers = combineReducers(
  Object.assign({}, reducers, { routing: routing(urls) })
);

let initialStore = { headings: getHeadingNames() };

let store = createStore(combinedReducers, initialStore, compose(enhancer));

window.state = store.getState();

export default store;
