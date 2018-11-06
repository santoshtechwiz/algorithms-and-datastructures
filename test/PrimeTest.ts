import { expect } from "chai";
import { primes } from "../Primes/Primes";

describe("Prime Number", () => {
  it("Print the prime number", () => {
    var result = primes(10);

    expect(result).to.deep.equal([2, 3, 5, 7]);
  });
});
