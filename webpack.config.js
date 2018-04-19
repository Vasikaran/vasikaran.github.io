const path = require('path');
const webpack = require('webpack');

let isVendor = module => {
  let { userRequest } = module;
  return (
    userRequest &&
    userRequest.indexOf('node_modules') >= 0 &&
    userRequest.indexOf(`node_modules${path.sep}react`) === -1 &&
    userRequest.indexOf('.css') === -1 &&
    userRequest.indexOf('publicPathConfig.js') === -1
  );
};

let isReact = module => {
  let { userRequest } = module;
  return (
    userRequest && userRequest.indexOf(`node_modules${path.sep}react`) >= 0
  );
};

module.exports = {
  entry: {
    main: './src/index.js'
  },
  devtool: 'eval',
  mode: 'none',
  output: {
    path: path.join(__dirname, 'build'),
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        'react.vendor': {
          name: 'react.vendor',
          chunks: 'all',
          minChunks: 1,
          test: isReact
        },
        vendor: {
          name: 'vendor',
          chunks: 'all',
          minChunks: 1,
          test: isVendor
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __TEST__: false,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __LOCAL_PRODUCTION__: false,
      __DEVTOOLS__: true,
      __DOCS__: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [require.resolve('babel-preset-env'), { modules: false }],
                require.resolve('babel-preset-react')
              ],
              cacheDirectory: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]'
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        use: ['url-loader?limit=1000&name=./images/[name].[ext]']
      },
      {
        test: /\.woff2|\.woff$|\.ttf$|\.eot$/,
        use: ['url-loader?limit=1000&name=./fonts/[name].[ext]']
      },
      {
        test: /\.svg$/,
        use: ['url-loader?limit=1&name=./fonts/[name].[ext]']
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  }
};
