'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const catSchema = require('./cat.schema');

require('dotenv').config();
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create catModel with our Schema
const catModel = catSchema(sequelizeDatabase, DataTypes);

module.exports =  {sequelizeDatabase, catModel};


