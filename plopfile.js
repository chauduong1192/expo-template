const componentGenerator = require('./generators/component/index');
const featureGenerator = require('./generators/features/index');

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('feature', featureGenerator);
};
