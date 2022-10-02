'use strict';

let logger = require('../src/middleware/logger');

describe('Test Logger Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Properly logs output', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});