'use strict';

module.exports = {
  get: jest.genMockFunction().mockReturnThis(),
  end: jest.genMockFunction()
};