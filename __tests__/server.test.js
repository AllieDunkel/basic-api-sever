'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { db } = require('../src/models');
const request = supertest(app);

beforeApp(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing Rest API', () => {
  test('Handles bad routes', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(404);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('Not Found');
  });

  test('Handles bad requests', async () => {
    const response = await request.post('/cats').send({info:'bad'}) 
    expect(response.status).toEqual(500);
  });

  // cat testing

  test('Create a new cat', async() => {
    let response = await (await request.post('/cat')).send({
      name: 'theo',
      gender: 'male',
      color: 'black',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('theo');
    expect(response.body.gender).toEqual('male');
    expect(response.body.color).toEqual('black');
    });

    test('Read all cats', async () => {
      let response = await request.get('/cats');
      expect(response.status).toEqual(200);
      expect(response.body[0].name).toEqual('theo');
      expect(response.body[0].gender).toEqual('male');
      expect(response.body[0].color).toEqual('black');
    });

    test('Read one cat', async () => {
      let response = await request.get('/cats/1');
      expect(response.status).toEqual(200);
      expect(response.body[0].name).toEqual('theo');
      expect(response.body[0].gender).toEqual('male');
      expect(response.body[0].color).toEqual('black');
    });

    test('Update a cat', async () => {
      let response = await request.put('/cats/1').send({
        name: 'moomoo',
        gender: 'female',
        color: 'black and white'
      })
      expect(response.status).toEqual(200);
      expect(response.body[0].name).toEqual('moomoo');
      expect(response.body[0].gender).toEqual('female');
      expect(response.body[0].color).toEqual('black and white');
    });

    test('Delete a cat', async () => {
      let response = await request.delete('/cats/1');
      expect(response.status).toEqual(200);
      expect(response.body).toEqual([]);
    });

   

  });


