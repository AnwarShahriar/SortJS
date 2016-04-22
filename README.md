## This project implements some common sorting algorithms.

### Sorting algorithms currently implemented:
1. Bubble Sort
2. Merge Sort
3. Quick Sort

### Important!
This algorithms are implemented with es6 features supported by latest node.js version.

### Sample Usage
```javascript
'use strict';
let Sorter = require('./Sorter.js');
let sorter = new Sorter();

const dataSet = [9, 8, 7, 6, 9, 4, 1, 0, 3, 0, 1];
console.log("BubbleSort: ", sorter.bubbleSort( dataSet ) );
console.log("MergeSort: ", sorter.mergeSort ( dataSet ) );
console.log("QuickSort: ", sorter.quickSort( dataSet ) );
```