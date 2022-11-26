const app = require('../index.js');
const Router = require('../structures/Router');

app.routesArray.forEach((route) => {
  if (route instanceof Router && route.method !== 'POST') return;
  app.post(route.path, route.run);
});
