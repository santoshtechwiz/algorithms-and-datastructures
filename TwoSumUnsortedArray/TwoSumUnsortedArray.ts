export function twoSumUnSortedArray(
  arr: Array<number>,
  sum: number
): Array<number> {
  var result = [];
  var hashTable = {};
  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    // calculate S - current element
    var sumMinusElement = sum - arr[i];
    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      result.push(arr[i]);
      result.push(sumMinusElement);
      return result;
    }
    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];
  }
  return [-1, -1];
}
