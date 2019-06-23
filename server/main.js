import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';

import routes from './routers';
import NotFound from './pages/NotFound';

import * as fs from 'fs';
import * as path from 'path';

const folderPath = path.join(__dirname, '../build');
const filePath = path.join(folderPath, 'index.html');
const index = fs.readFileSync(filePath, 'utf8');
const staticFiles = [
  '/static/css/*',
  '/static/js/*',
  '/static/media/*',
  '/asset-manifest.json',
  '/manifest.json',
  '/appicon.png',
  '/favicon.png',
  '/service-worker.js',
];

const start = async () => {
  try {
    const app = express();
    staticFiles.forEach(file => {
      app.get(file, (req, res) => {
        const filePath = path.join(folderPath, req.url);
        res.sendFile(filePath);
      });
    });

    app.get('*', async (req, res) => {
      let item;
      let url = decodeURIComponent(req.url);

      for (let route of routes) {
        const match = matchPath(url, route.path, route);
        if (match && match.isExact) {
          item = {
            match,
            route,
          };
          break;
        }
      }

      let head = '';
      url = req.protocol + '://' + req.get('host') + req.originalUrl;
      url = decodeURIComponent(url);

      if (item) {
        try {
          let data = await item.route.component.fetch(item.match);
          let context = {};
          head = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context} >
              <item.route.component initial={data} url={url} />
            </StaticRouter>
          );
        } catch (e) {
          console.error(e);
        }
      } else {
        let context = {};
        head = ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context} >
            <NotFound url={url} />
          </StaticRouter>
        );
      }

      let html = index.replace('<meta name="header">', head);
      res.status(200).send(html);
    });

    app.listen(3000);
  } catch (err) {
    console.error(err);
  }
};

start();
