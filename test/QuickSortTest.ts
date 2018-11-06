import { expect } from "chai";
import { QuickSort } from "../QuickSort/QuickSort";

describe.skip("Quick Sort", () => {
  it("Sort the array in ascending order", () => {
    const arr = [4, 2, 1, -1, 10, -2];
    var result = QuickSort(arr);
    console.log(result);
    expect(QuickSort(arr)[0]).to.equal(-2);
    expect(QuickSort(arr)).to.deep.equal([-2, -1, 1, 2, 4, 10]);
  });
});
