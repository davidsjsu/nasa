const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback, // if you already have fallback object
    "timers": require.resolve("timers-browserify")
  };
  return config;
};
