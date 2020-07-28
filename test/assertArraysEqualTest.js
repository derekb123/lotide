const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#assertArraysEqual', () => {

  it('asserts that [1, 2, 3] = [1, 2, 3]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false