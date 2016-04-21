'use strict';
let Sorter = require('./Sorter.js');
let sorter = new Sorter();

const dataSet = [9, 8, 7, 6, 9, 4, 1, 0, 3, 0, 1];
console.log("BubbleSort: ", sorter.bubbleSort( dataSet ) );
console.log("MergeSort: ", sorter.mergeSort ( dataSet ) );
console.log("QuickSort: ", sorter.quickSort( dataSet ) );