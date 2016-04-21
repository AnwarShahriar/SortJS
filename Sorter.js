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
        mergeSortAlg(arr, 0, arr.length - 1);
        return arr;
    }
    
    quickSort(tobeSorted) {
        let arr = tobeSorted.slice();
        return arr;
    }
}

var mergeSortAlg = function (arr, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSortAlg(arr, p, q);
        mergeSortAlg(arr, q + 1, r);
        merge(arr, p, q, r);
    }    
};

var merge = function (arr, p, q, r) {
    let lowHalf = [];
    let highHalf = [];
    
    for(let i = 0, k = p; k <= q; i++, k++) {
        lowHalf[i] = arr[k];
    }
    
    for(let i = 0, k = q + 1; k <= r; i++, k++) {
        highHalf[i] = arr[k];
    }
    
    let i = 0, j = 0, k = p;
    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            arr[k] = lowHalf[i];
            k++;
            i++;
        } else {
            arr[k] = highHalf[j];
            k++;
            j++;
        }
    }
    
    while (i < lowHalf.length) {
        arr[k] = lowHalf[i];
        k++;
        i++;
    }
    
    while (j < highHalf.length) {
        arr[k] = highHalf[j];
        k++;
        j++;
    }
};