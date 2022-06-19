const express = require('express');
const app = express();

app.routesArray = [];
module.exports = app;
require('./handler/index.js')(app);

app.listen(8080);
