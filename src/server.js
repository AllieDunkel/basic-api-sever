'use strict';

const express = require('express');
const catRouter = ('./routes/cats');
const PORT = process.env.PORT || 3002;

// import  middleware and error handlers
const logger = require('./middleware/logger');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();
app.use(express.json());
app.use(catRouter);
app.use(logger);
app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
}
module.exports = {app, start};
