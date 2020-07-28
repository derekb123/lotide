const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe('#AssertEqual', () => {
  it('1 is equal to 1', () => {
    assertEqual(1, 1)
  });
});


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);