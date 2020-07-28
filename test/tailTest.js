const tail = require('../tail.js');
const assertArraysEqual = require('../assertArraysEqual.js')
const assert = require('chai').assert;

describe('#tailTest', () => {
  it('tail of [4,5,6,7] = [5,6,7]', () => {
    assert.strictEqual(assertArraysEqual(tail([4,5,6,7]), [5,6,7]));
  });
});

// assertArraysEqual(tail([4,5,6,7]), [5,6,7]);
// assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

// const words = ["Yo Yo"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertArraysEqual(words.length, 3); // original array should still have 3 elements!