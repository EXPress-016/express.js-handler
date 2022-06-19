const { glob } = require('glob');
const { promisify } = require('util');

const globPromise = promisify(glob);

module.exports = async (app) => {
  // Routes
  const routes = await globPromise(`${process.cwd()}/routes/*.js`);
  routes.map((value) => {
    const file = require(value);
    if (!file.path) return;
    app.routesArray.push(file);
  });

  // Methods
  const Methods = await globPromise(`${process.cwd()}/methods/*.js`);
  Methods.map((value) => require(value));
};
