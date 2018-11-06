export function binarySearch(nums: Array<number>, key: number): number {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    mid;
    if (nums[mid] === key) {
      return mid + 1;
    }
    if (key > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
