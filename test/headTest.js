const head = require('../head.js');
const assertEqual = require('../head.js')

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");