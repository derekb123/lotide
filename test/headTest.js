const head = require('../head.js');
const assertEqual = require('../assertEqual.js')

assertEqual(head([4,6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");