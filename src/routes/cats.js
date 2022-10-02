'use strict';

const express = require('express');
const { catModel } = require('../models/');
const catRouter = express.Router();
const errorHandler = require('../error-handlers/500');

//get all the cats
catRouter.get('/cats', async (req, res, next) => {
    try {
      const cats = await catModel.findAll();
      res.status(200).send(cats);
      next();
    } catch (error) {
      errorHandler(error, req, res);
    }
  });

// get one cat
catRouter.get('/cats/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const cat = await catModel.findAll({ where: { id } });
    res.status(200).send(cat);
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//creating a cat
catRouter.post('/cats', async (req, res, send) => {
  try {
    const newCat = await catModel.create(req.body);
    res.status(200).send(newCat);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//updating a cat
catRouter.put('/cats/:id', async (req, res, send) => {
  try {
    let id = req.params.id;
    await catModel.update(req.body, { where: { id } });
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//deleting a cat
catRouter.delete('/cats/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    await catModel.destroy({ where: {id } });
    const deletedCat = await catModel.findAll({ where: { id } });
    res.status(200).send(deletedCat);
  } catch (error) {
    errorHandler(error, req, res);
  }

});

module.exports = catRouter;
