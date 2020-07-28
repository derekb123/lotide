
const flatten = function(arr) {
  finalArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      finalArr.push(arr[i])
    }
    else {
      for (j = 0; j < arr[i].length; j++)
        finalArr.push(arr[i][j]);
    }
  }
  return finalArr;
}

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));


// const eqArrays = function(arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
//     else {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1.length !== arr2.length) {
//       console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] equals [${arr2}]`);
//       return;
//     }
//     else {
//       if (arr1[i] !== arr2[i]) {
//         console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] equals [${arr2}]`);
//         return;
//       }
//     }
//   }
//   console.log(`✅✅✅ Assertion Passed: [${arr1}] equals [${arr2}]`);
//   return;
// };

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false