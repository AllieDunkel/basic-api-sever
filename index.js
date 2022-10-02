'use strict';

// requires from the models/index.js
const { db, catModel} = require('./src/models');
const { start } = require('./src/server');


//create all associated tables and make sure connection is good
db.sync()
  .then(() => {
    console.log(`Successful Connection!`);
  })
  .catch(err => console.error(err));

start();