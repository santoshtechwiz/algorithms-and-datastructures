export function permutation(arr: Array<number>): Array<number[]> {
  let result: Array<number[]> = new Array<number[]>();
  function helper(arr: Array<number>, index: number) {
    if (arr == null) return result;
    if (arr.length == index) {
      result.push([...arr]);
      return;
    }
    for (let i = index; i < arr.length; i++) {
      swap(arr, i, index);
      helper(arr, index + 1);
      swap(arr, i, index);
    }
  }
  helper(arr, 0);
  return result;
}

function swap(arr: Array<number>, i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
