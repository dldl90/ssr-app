import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import register from 'ignore-styles';
import { Styles, Header, Footer, Copyright } from '@noths/global-components';

import webpackDevConfig from './webpack.dev.config';

import { navigationFetcher, GlobalDataContext } from '../src';
import App from './Application';

const path = require('path');
register(['.sass', '.scss']);
const server = express();

server.disable('x-powered-by');
server.enable('trust proxy');

const webpackDevCompiler = webpack(webpackDevConfig);
server.use(
  webpackDev(webpackDevCompiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  })
);
server.use(webpackHot(webpackDevCompiler));

server.use('/stats', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/stats.html'));
});

const renderApp = async (req, res) => {
  const sheet = new ServerStyleSheet();
  const navData = await navigationFetcher(true);

  const header = renderToString(
    <React.Fragment>
      <Styles />
      <Header />
    </React.Fragment>
  );

  const footer = renderToString(
    <React.Fragment>
      <Copyright />
      <Footer />
    </React.Fragment>
  );

  const rootApp = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <GlobalDataContext.Provider value={{ navData }}>
        <App />
      </GlobalDataContext.Provider>
    </StyleSheetManager>
  );

  const styleTags = sheet.getStyleTags();

  res.send(`
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Global Components</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        ${styleTags}
        <style>
          @media only screen and (max-width: 47.97917em) {
            [global-component].gc-header .gc-header-menu {
                position: absolute;
                left: 0;
                display: none;
            }
          }
        </style>
      </head>
      <body>
        ${header}
        <div id="root">
          ${rootApp}
        </div>
        ${footer}
      </body>
      <script type="text/javascript">window.GLOBAL_STATE = ${JSON.stringify(navData).replace(
        /</g,
        '\\u003c'
      )}</script>
      <script src="app-compiled.js"></script>
    </html>
  `);
};

server.use(renderApp);

const port = 3001;
server.listen(port, err => {
  if (err) console.error(err); //eslint-disable-line
  console.log(`\n \n Server listening on port ${port} \n \n `); //eslint-disable-line
});
