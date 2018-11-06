import { expect } from "chai";
import { permutation } from "../Permutations/Permutations";

describe("Permutations", () => {
  it("Should return empty when the input is empty array", () => {
    var result = permutation([]);

    expect(result).to.deep.equal([[]]);
  });
  it("Should return the permutations of the non empty array", () => {
    var result = permutation([1, 2, 3]);
    expect(result[1]).to.deep.equal([1, 3, 2]);
  });
});
