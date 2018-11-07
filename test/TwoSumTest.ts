import { expect } from "chai";
import { twoSum } from "../TwoSum/TwoSum";

describe("Two sum", () => {
  it("should return [-1,-1] if sum not found", () => {
    let arr = [1, 2, 3, 4, 10, 12, 14];
    let sum = 1;
    let result = twoSum(arr, sum);
    expect(result).to.be.an("Array");
    expect(result).to.deep.equal([-1, -1]);
  });
  it("should return index of the array element", () => {
    let arr = [1, 2, 3, 4, 10, 12, 14];
    let sum = 11;
    let result = twoSum(arr, sum);
    expect(Array.isArray(result));
    expect(result).to.deep.equal([0, 4]);
  });
});
