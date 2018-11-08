export function kthSmallest(
  arr: Array<number>,
  left: number,
  right: number,
  k: number
): number {
  if (left === right) {
    return arr[left];
  }
  let pivot = partition(arr, left, right);
  if (pivot == k) {
    return arr[pivot];
  } else if (k < pivot) {
    return kthSmallest(arr, left, pivot - 1, k);
  } else {
    return kthSmallest(arr, pivot + 1, right, k);
  }
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
