"use strict";
exports.__esModule = true;
function kthSmallest(arr, left, right, k) {
    if (k >= 0 && k <= right - left + 1) {
        var pos = partition(arr, left, right);
        if (pos === k) {
            return arr[pos];
        }
        if (k < pos) {
            return kthSmallest(arr, left, pos - 1, k);
        }
        else {
            return kthSmallest(arr, pos + 1, right, k - pos + left - 1);
        }
    }
    return 0;
}
exports.kthSmallest = kthSmallest;
function partition(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length; }
    var swapIndex = start;
    var pivot = arr[start];
    for (var i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, swapIndex, start);
    console.log(arr);
    swapIndex;
    return swapIndex;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var arr = [4, 1, 2, 11, -10, -2];
var r = kthSmallest(arr, 0, arr.length - 1, 2);
console.log(r);
