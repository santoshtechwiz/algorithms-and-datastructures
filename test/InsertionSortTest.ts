import { expect } from "chai";
import { insertionSort } from "../InsertionSort/InsertionSort";

describe.skip("Insertion Sort", () => {
  it("Sort the array in ascending order", () => {
    const arr2 = [4, 2, 1, -1, 10, -2];

    expect(insertionSort(arr2)).to.deep.equal([-2, -1, 1, 2, 4, 10]);
  });
});
