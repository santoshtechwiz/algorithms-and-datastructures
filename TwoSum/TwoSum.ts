export function twoSum(arr: Array<number>, sum: number): Array<number> {
  let start = 0;
  let end = arr.length - 1;
  let result = [];
  while (start < end) {
    if (arr[start] + arr[end] === sum) {
      result.push(start);
      result.push(end);
      return result;
    } else if (arr[start] + arr[end] > sum) {
      end--;
    } else {
      start++;
    }
  }
  return [-1, -1];
}
