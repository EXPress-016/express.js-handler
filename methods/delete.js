const app = require('../index.js');
const Router = require('../structures/Router');

app.routesArray.forEach((route) => {
  if (route instanceof Router && route.method !== 'DELETE') return;
  app.delete(route.path, (req, res) => {
    route.run(req, res);
  });
});
