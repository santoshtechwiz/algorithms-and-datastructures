import { expect } from "chai";
import { arrayShuffle } from "../ArrayShuffle/ArrayShuffle";

describe("Array Shuffle", () => {
  it("Should suffle the array element", () => {
    const arr = [4, 2, 1, -1, 10, -2];
    const result = arrayShuffle(arr);
    console.log(result);
    expect(result)
      .to.be.an("array")
      .that.includes(-2);
    expect(result)
      .to.be.an("array")
      .that.includes(10);
    expect(result.length).to.be.equal(arr.length);
  });
});
