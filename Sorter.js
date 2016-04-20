'use strict';
module.exports = class Sorter {
    bubbleSort(tobeSorted) {
        let arr = tobeSorted.slice();
        
        let swapped = true;
        
        while (swapped) {
            swapped = false;
            
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    let temp = arr[i];
                    arr[i] = arr[i - 1];
                    arr[i - 1] = temp;
                    swapped = true;
                }
            }
        }
        
        return arr;
    }
    
    mergeSort(tobeSorted) {
        let arr = tobeSorted.slice();
        return arr;
    }
    
    quickSort(tobeSorted) {
        let arr = tobeSorted.slice();
        return arr;
    }
}