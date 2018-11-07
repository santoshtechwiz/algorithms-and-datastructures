import { expect } from "chai";
import { twoSumUnSortedArray } from "../TwoSumUnsortedArray/TwoSumUnsortedArray";

describe("Two sum unsorted array", () => {
  it("should return [-1,-1] when no match found", () => {
    let arr = [1, 11, 2, 5, -1];
    let sum = -2;
    let result = twoSumUnSortedArray(arr, sum);
    expect(result).to.be.an("Array");
    expect(result).to.deep.equal([-1, -1]);
  });
  it("should return array of matched element", () => {
    let arr = [1, 11, 2, 5, -1];
    let sum = 7;
    let result = twoSumUnSortedArray(arr, sum);
    expect(result).to.be.an("Array");
    expect(result).to.deep.equal([5, 2]);
  });
});
