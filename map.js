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

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5];
const floats = [1.5,2.7,3.9,4.4,5.6];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(nums, num => num + 1);
assertArraysEqual(results2, [2,3,4,5,6]);

const results3 = map(floats, float => Math.floor(float));
assertArraysEqual(results3, [1,2,3,4,5]);


