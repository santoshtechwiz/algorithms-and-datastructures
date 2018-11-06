import { expect } from "chai";
import { subset } from "../Subset/Subset";

describe("Subset", () => {
  it("Print all the subset of given array", () => {
    var result = subset([1, 2, 3]);

    expect(result[0]).to.deep.equal([]);
    expect(result[1]).to.deep.equal([1]);
    expect(result[2]).to.deep.equal([1, 2]);
    expect(result[result.length - 1]).to.deep.equal([3]);
  });
});
