import { expect } from "chai";
import { primeFactors } from "../PrimeFactors/PrimeFactors";

describe("Prime Factors", () => {
  it("should return the prime factor of given number", () => {
    let factor = primeFactors(10);
    expect(factor).to.be.an("Array");
    expect(factor).to.be.deep.equal([2, 5]);
  });
  it("should return empty array if number is less than 1", () => {
    let factor = primeFactors(1);
    expect(factor).to.be.an("Array");
    expect(factor).to.be.deep.equal([]);
  });
});
