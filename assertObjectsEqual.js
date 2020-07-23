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


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; 
  //console.log(`Example label: ${inspect(actual)}`);
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const obj in object1) {
      if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])){
        if (!eqArrays(object1[obj], object2[obj])) {
          console.log(`🛑🛑🛑 Assertion Failed: [${inspect(object1)}] does not equal [${inspect(object2)}]`);
      return;
        }
      }
      else if (object1[obj] !== object2[obj]) {
        console.log(`🛑🛑🛑 Assertion Failed: [${inspect(object1)}] does not equal [${inspect(object2)}]`);
      return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: [${inspect(object1)}] equals [${inspect(object2)}]`);
  return;
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(object1)}] does not equal [${inspect(object2)}]`);
      return;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false