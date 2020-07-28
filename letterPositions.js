const assertArraysEqual = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] does not equals [${arr2}]`);
      return;
    }
    else {
      if (arr1[i] !== arr2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] does not equals [${arr2}]`);
        return;
      }
    }
  }
  console.log(`✅✅✅ Assertion Passed: [${arr1}] equals [${arr2}]`);
  return;
};



const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};


const letterPositions = function(sentence) {
  const results = {};
  for (const char in sentence) {
    if (results[sentence[char]]) {
      results[sentence[char]].push(char);
    }
    else {
      results[sentence[char]] = [char];
    }
  }
  // logic to update results here
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions('hello').e, [1]);