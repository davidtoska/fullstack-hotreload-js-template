import express from "express";

import path from "path";

const server = express();
const webpack = require("webpack");
const config = require("../../config/webpack.dev.js");
const compiler = webpack(config);
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

// Rekkefølge 1: Dev,
server.use(webpackDevMiddleware);
// 2: Hot
server.use(webpackHotMiddleware);
// 3: Static
const staticMiddelware = express.static("dist");
server.use(staticMiddelware);

server.listen(8080, () => {
  console.log(`Server listening on port ${8080}`);
});
