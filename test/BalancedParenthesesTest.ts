import { expect } from "chai";
import { isBalanced } from "../BalancedParentheses/BalancedParentheses";

describe("BalancedParentheses", () => {
  it("Should return false if expr is not balanced", () => {
    var expr = "{([]))";
    var result = isBalanced(expr);
    expect(result).to.be.equal(false);
  });
  it("Should return true if expr is  balanced", () => {
    var expr = "{([])}";
    var result = isBalanced(expr);
    expect(result).to.be.equal(true);
  });
});
