//eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

function getAsyncContainer(getComponent) {
  return class AsyncContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null
      };
    }

    shouldComponentUpdate() {
      return true;
    }

    componentDidMount() {
      this.mount = true;
      let { Component } = this.state;
      if (!Component) {
        let promise = getComponent();
        promise
          .then(Component => {
            if (this.mount) {
              this.setState({ Component });
            }
          })
          .catch(e => {
            throw e;
          });
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }

    componentWillUnmount() {
      this.mount = null;
    }
  };
}

//eslint-disable-next-line
__webpack_public_path__ = '/build/';

function getErrorBoundariesExample() {
  return new Promise(res => {
    require.ensure(
      [],
      () => {
        let errorBoundariesExample = require('../../react16-examples/ErrorBoundariesExample/ErrorBoundariesExample')
          .default;
        res(errorBoundariesExample);
      },
      'errorBoundariesExample'
    );
  });
}

export const AsyncErrorBoundariesExample = getAsyncContainer(() =>
  getErrorBoundariesExample().then(res => res)
);

function getFragmentExample() {
  return new Promise(res => {
    require.ensure(
      [],
      () => {
        let fragmentExample = require('../../react16-examples/FragmentExample/FragmentExample')
          .default;
        res(fragmentExample);
      },
      'fragmentExample'
    );
  });
}

export const AsyncFragmentExample = getAsyncContainer(() =>
  getFragmentExample().then(res => res)
);

function getPortalExample() {
  return new Promise(res => {
    require.ensure(
      [],
      () => {
        let portalExample = require('../../react16-examples/PortalExample/PortalExample')
          .default;
        res(portalExample);
      },
      'portalExample'
    );
  });
}

export const AsyncPortalExample = getAsyncContainer(() =>
  getPortalExample().then(res => res)
);
