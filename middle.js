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

// // const assertArraysEqual = function(arr1, arr2) {
// //   for (i = 0; i < arr1.length; i++) {
// //     if (arr1.length !== arr2.length) {
// //       console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] equals [${arr2}]`);
// //       return;
// //     }
// //     else if (arr1[i] !== arr2[i]) {
// //       console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] equals [${arr2}]`);
// //       return;
// //     }
// //   }
// //   console.log(`✅✅✅ Assertion Passed: [${arr1}] equals [${arr2}]`);
// //   return;
// // }z



const middle = function(arr) {
  middleArr = [];
  if (arr.length === 1 || arr.length ===2) {
    return [];
  }
  else if (arr.length % 2 === 0) {
    middleArr.push(arr[(arr.length/2) - 1], arr[arr.length/2]);
  }
  else {
    middleArr.push(arr[Math.floor(arr.length/2)]);
  }
  return middleArr;
}

module.exports = middle;





console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]