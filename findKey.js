const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (ob in object){
    if (callback(object[ob])) {
      return ob;
    }
  }
}

module.exports = findKey;


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

obj1 = {
  "Movie 1": 5,
  "Movie 2": 2,
  "Movie 3": 4,
}

obj2 = {
  "Movie 1": 'Thor',
  "Movie 2": 'Wolverine',
  "Movie 3": 'Guardians',
}

assertEqual(findKey(obj1, num => num < 3), 'Movie 2');
assertEqual(findKey(obj2, char => char[0] === 'G'), 'Movie 3');