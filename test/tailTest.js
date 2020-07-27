const tail = require('../tail.js');
const assertArraysEqual = require('../assertArraysEqual.js')

assertArraysEqual(tail([4,5,6,7]), [5,6,7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

// const words = ["Yo Yo"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertArraysEqual(words.length, 3); // original array should still have 3 elements!