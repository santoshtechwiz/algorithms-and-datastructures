function findChar(c, source, start): any {
  if (source.length <= start) {
    return -1;
  } else if (c === source[start]) {
    return start;
  } else {
    return findChar(c, source, start + 1);
  }
}
var xx = findChar("z", "Testing for a character", 0);
xx;
function perm(nums: Array<number>) {
  if (!nums) {
    return [];
  }
  return helper2(nums, [], [], 0);
}
function helper2(nums, result, temp = [], index) {
  if (nums.length === temp.length) {
    result.push([...temp]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] in temp) {
        continue;
      }
      temp.push(nums[i]);
      helper2(nums, result, temp, i);
      temp.pop();
    }
  }
  return result;
}
function subset(nums: Array<number>): Array<number> {
  if (!nums) {
    return [];
  }
  return helper(nums, [], [], 0);
}
// tslint:disable-next-line:typedef
function helper(nums, result, plist, index): Array<number> {
  result.push([...plist]);
  for (let i: number = index; i < nums.length; i++) {
    plist.push(nums[i]);
    helper(nums, result, plist, i + 1);
    plist.pop();
  }
  return result;
}

// tslint:disable-next-line:typedef
var zzz = perm([1, 2, 3]);
zzz;
