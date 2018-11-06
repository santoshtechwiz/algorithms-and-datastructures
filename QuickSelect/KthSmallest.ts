export function kthSmallest(
  arr: Array<number>,
  left: number,
  right: number,
  k: number
): number {
  let pos = partition(arr, left, right);
  if (pos === k - 1) {
    return arr[pos];
  } else if (k - 1 < pos) {
    return kthSmallest(arr, left, pos - 1, k);
  } else {
    return kthSmallest(arr, pos + 1, right, k);
  }
}

function partition(arr: Array<number>, start: number = 0, end): number {
  let swapIndex = start;
  let pivot = arr[start];
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, swapIndex, start);

  return swapIndex;
}

function swap(arr: Array<number>, i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var arr = [4, 1, 2, 11, -10, -2, -20];
var r = kthSmallest(arr, 0, arr.length - 1, 1);
console.log(r);
