export function bubbleSort(arr: Array<number>): Array<number> {
  for (let outer = arr.length; outer >= 0; outer--) {
    for (let inner = 0; inner < outer; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];
      }
    }
  }
  return arr;
}
