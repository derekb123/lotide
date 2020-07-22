const assertArraysEqual = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] equals [${arr2}]`);
      return;
    }
    else {
      if (arr1[i] !== arr2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] equals [${arr2}]`);
        return;
      }
    }
  }
  console.log(`✅✅✅ Assertion Passed: [${arr1}] equals [${arr2}]`);
  return;
};



// const assertArraysEqual = function(arr1, arr2, actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} equals ${arr2}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} equals ${arr2}`);
//   }
// };

assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

