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



const takeUntil = function(array, callback) {
  finalArr = [];
  for (let item of array) {
    if (callback(item)){
      return finalArr;
    }
    else if (!callback(item)){
      finalArr.push(item);
    }
    else {
      return finalArr;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x === 3 + 2), [1, 2,])
assertArraysEqual(takeUntil(data2, x => x[0] === 'H'), ["I've", "been", "to"])