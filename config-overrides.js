module.exports = function override(config, env) {
  config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.forEach((one) => {
        if (one.options && Array.isArray(one.options.plugins)) {
          one.options.plugins.push(require.resolve('@babel/plugin-proposal-optional-chaining'));
        }
      });
    }
  });
  return config;
};
