import { expect } from "chai";
import { Stack } from "../Stack/Stack";

describe("Stack", () => {
  it("can be initialized without an initializer", () => {
    const s = new Stack<number>();
    expect(s.size()).to.equal(0);
  });
  it("can be initialized with an initializer", () => {
    const s = new Stack<number>([1, 2, 3, 4]);
    expect(s.size()).to.equal(4);
  });
  it("can be pushed upon", () => {
    const s = new Stack<number>([1, 2, 3, 4]);
    s.push(5);
    expect(s.size()).to.equal(5);
    expect(s.peek()).to.equal(5);
  });
});
