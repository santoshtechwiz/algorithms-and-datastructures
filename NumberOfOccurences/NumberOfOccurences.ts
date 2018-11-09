function binarySearch(
  arr: Array<number>,
  num: number,
  searchFirst: boolean = true
): number {
  let low = 0;
  let high = arr.length - 1;
  let result: number = -1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == num) {
      result = mid;
      if (searchFirst) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (num < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

export function numberOfOccurences(
  arr: Array<number>,
  num: number
): number | null {
  let firstIndex = binarySearch(arr, num, true);

  if (firstIndex === -1) {
    return null;
  }
  let lastIndex = binarySearch(arr, num, false);

  return lastIndex - firstIndex + 1;
}
