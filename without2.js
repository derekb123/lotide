const without = function(arr1, arr2) {
  let newArr = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++)
      if (arr1[i] !== arr2[j]) {
      }
      else {
        newArr
      }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


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

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);