import { expect } from "chai";
import { mergeSort } from "../MergeSort/MergeSort";

describe.skip("Merge Sort", () => {
  it("Sort the array in ascending order", () => {
    const arr = [4, 2, 1, -1, 10, -2, 9];
    var result = mergeSort(arr);

    expect(mergeSort(arr)[0]).to.equal(-2);
    expect(mergeSort(arr)).to.deep.equal([-2, -1, 1, 2, 4, 9, 10]);
  });
});
