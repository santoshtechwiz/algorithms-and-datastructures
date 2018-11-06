import { expect } from "chai";
import { selectionSort } from "../SelectionSort/SelectionSort";

describe("selectionSort Sort", () => {
  it("Sort the array in ascending order", () => {
    const arr = [4, 2, 1, -1, 10, -2, -100];
    var result = selectionSort(arr);
    console.log(result);
    expect(selectionSort(arr)[0]).to.equal(-100);
    expect(selectionSort(arr)).to.deep.equal([-100, -2, -1, 1, 2, 4, 10]);
  });
});
