const head = require('../head.js');
const assertEqual = require('../assertEqual.js')

assertEqual(head([5,6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");