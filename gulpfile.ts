const { dest, parallel, series, src, watch } = require("gulp");

const doc = require("gulptask-tsdoc").get();
const server = require("gulptask-dev-server")("./docs/demo");

const copyHTMLGlob = "./demoSrc/**/*.html";
const copyHTML = () => {
  return src(copyHTMLGlob, { base: "./demoSrc/" }).pipe(dest("./docs/demo"));
};

const { bundleDevelopment, watchBundle } = require("gulptask-webpack")(
  "./webpack.config.js"
);
const { tsc, tscClean, watchTsc } = require("gulptask-tsc").get();

const watchTasks = cb => {
  watchBundle();
  watchTsc();
  copyHTML();
  cb();
};

exports.start_dev = series(watchTasks, server);
exports.build = series(tsc, copyHTML, bundleDevelopment, doc);
exports.build_clean = series(tscClean, copyHTML, bundleDevelopment, doc);
