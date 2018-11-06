import { expect } from "chai";
import { bubbleSort } from "../BubbleSort/Bubble";

describe.skip("Bubble Sort", () => {
  it("Sort the array in ascending order", () => {
    const arr = [4, 2, 1, -1, 10, -2];

    expect(bubbleSort(arr)[0]).to.equal(-2);
    expect(bubbleSort(arr)).to.deep.equal([-2, -1, 1, 2, 4, 10]);
  });
});
