
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe('#middleTest', () => {
  it('middle of [1, 2, 4, 5, 7] = middle of [2, 2, 4 ,90, 1000]', () => {
    assert.deepEqual(middle([1, 2, 4, 5, 7]), middle ([2, 2, 4 ,90, 1000]));
  });
});

// assertArraysEqual(middle([1, 2, 4, 5, 7]), middle ([2, 2, 4 ,90, 1000]));