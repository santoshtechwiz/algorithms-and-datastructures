import { expect } from "chai";
import { Queue } from "../Queue/Queue";

describe("Queue", () => {
  it("should return [1,2] when push 1 and 2 into the queue", () => {
    let q = new Queue<number>();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.queueItems).to.deep.equal([1, 2]);
  });
  it("should return first item when dequeue", () => {
    let q = new Queue<number>();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.dequeue()).to.equal(1);
  });
  it("should throw the error when dequeue the empty queue", () => {
    let q = new Queue<number>();

    expect(q.dequeue.bind(q)).to.throw("Queue is empty");
  });
});
