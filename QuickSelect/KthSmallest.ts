export function kthSmallest(
  arr: Array<number>,
  left: number,
  right: number,
  k: number
): number {
  if (k > 0 && k <= right - left + 1) {
    let pos = partition(arr, left, right);
    if (left == right) return arr[left];
    if (pos - 1 === k - 1) {
      return arr[pos];
    }
    if (pos - 1 > k - 1) {
      return kthSmallest(arr, left, pos - 1, k);
    } else return kthSmallest(arr, pos + 1, right, k - pos + left - 1);
  }
  console.log("returning zero");
  return 0;
}

function partition(arr: Array<number>, start: number, end): number {
  let pivot = arr[end];
  let swapIndex = start;
  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      swap(arr, swapIndex, j);
      swapIndex++;
    }
  }
  swap(arr, swapIndex, end);
  return swapIndex;
}

function swap(arr: Array<number>, i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var arr = [4, 1, 2, 11, 21, -11];
var r = kthSmallest(arr, 0, arr.length - 1, 5);
console.log(r);
