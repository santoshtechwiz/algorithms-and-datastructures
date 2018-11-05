export function insertionSort(arr: Array<number>): Array<number> {
  for (let i = 1; i < arr.length; i++) {
    let currentItem = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentItem) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentItem;
  }

  return arr;
}
insertionSort([1, 2, -1, -2]);
