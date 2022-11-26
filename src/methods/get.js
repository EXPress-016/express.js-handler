const app = require('../index.js');
const Router = require('../structures/Router');

app.routesArray.forEach((route) => {
  if (route instanceof Router && route.method !== 'GET') return;
  app.get(route.path, route.run);
});
