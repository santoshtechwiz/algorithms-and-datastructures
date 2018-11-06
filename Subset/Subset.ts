export function subset(nums: Array<number>): Array<number[]> {
  var result: Array<number[]> = new Array<number[]>();
  function helper(
    nums: Array<number>,
    start: number,
    end: number,
    curArr: Array<number>
  ) {
    result.push(curArr);
    for (let i = start; i <= end; i++) {
      curArr.push(nums[i]);
      helper(nums, i + 1, end, curArr.concat());
      curArr.pop();
    }
  }
  helper(nums, 0, nums.length - 1, []);
  return result;
}
const a = subset([1, 2, 3]);
console.log(a);
