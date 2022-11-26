const ExtendedApp = require('./structures/App');

const app = new ExtendedApp().express;

module.exports = app;

app.listen(8080);
