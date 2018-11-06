import { expect } from "chai";
import { binarySearch } from "../BinarySearch/BinarySearch";

describe("BinarySearch", () => {
  it("Should return -1 if element not found", () => {
    let arr = [1, 2, 3, 11, 16, 20];
    var result = binarySearch(arr, 10);
    expect(result).to.be.equal(-1);
  });
  it("should return index of the item if it found", () => {
    let arr = [1, 2, 3, 11, 16, 20];
    var result = binarySearch(arr, 11);
    expect(result).to.be.equal(4);
  });
});
