const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
  countObj = {};
  for (const char in str) {
  //console.log(str[char]);
    if (countObj[str[char]]) {
      countObj[str[char]] += 1;
    }
    else {
      countObj[str[char]] = 1;
    }
  }
  return countObj;
}

// assertEqual(countLetters('fluff').f, 3);
// assertEqual(countLetters('aardvark').a, 3);

// console.log(countLetters('abracadabra'));

module.exports = countLetters;