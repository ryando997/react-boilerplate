const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require("../webpack/webpack.dev.babel.js");

const HTML_FILE = path.join(process.cwd(), "dist", "index.html");

const app = express();
const config = webpackConfig();
const compiler = webpack(config);

const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  logLevel: 'warn',
  silent: true,
  stats: 'errors-only'
})
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(process.cwd(), "dist")));
app.get("*", (req, res) => {res.sendFile(HTML_FILE)});

app.listen(3000, () => {
    console.log("-----------------------------------");
    console.log("")
    console.log(`Localhost: http://localhost:${3000}`);
    console.log(`IP: http://localhost:${3000}`);
    console.log("")
    console.log("-----------------------------------");
});
