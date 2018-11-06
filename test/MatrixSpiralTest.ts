import { expect } from "chai";
import { printSpiral } from "../MatrixSpiral/MatrixSpiral";

describe("Print Matrix in Spiral Order", () => {
  it("Should print matrix in spiral order", () => {
    const result = printSpiral(4);

    expect(result[0]).to.deep.equal([1, 2, 3, 4]);
    expect(result[1]).to.deep.equal([12, 13, 14, 5]);
  });
});
