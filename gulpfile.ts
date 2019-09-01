const { dest, parallel, series, src, watch } = require("gulp");

const doc = require("gulptask-tsdoc").get();
const server = require("gulptask-dev-server")("./docs/demo");

const copyGlob = "./demoSrc/**/*.{html,png,jpg,jpeg}";
const copy = () => {
  return src(copyGlob, { base: "./demoSrc/" }).pipe(dest("./docs/demo"));
};

const { bundleDevelopment, watchBundle } = require("gulptask-webpack")(
  "./webpack.config.js"
);
const { tsc, tscClean, watchTsc } = require("gulptask-tsc").get();

const watchTasks = cb => {
  watchBundle();
  watchTsc();
  copy();
  cb();
};

exports.start_dev = series(watchTasks, server);
exports.build = series(tsc, copy, bundleDevelopment, doc);
exports.build_clean = series(tscClean, copy, bundleDevelopment, doc);
