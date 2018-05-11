const express = require('express');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');

const mockApi = require('./mockapi/index');

let args = process.argv.slice(2);

let port = args[0] || 9090;

const app = express();

let config = require('./webpack.config.js');
let compiler = webpack(config);

app.use(
  devMiddleware(compiler, {
    logLevel: 'info',
    publicPath: '/build/'
  })
);

mockApi(app);

app.use('/src', express.static('src'));

app.use('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  //eslint-disable-next-line
  console.log(`Listening at ht${''}tp://localhost:${port}/home`);
});
