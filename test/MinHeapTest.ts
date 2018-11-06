import { expect } from "chai";
import { MinHeap } from "../MinHeap/MinHeap";

describe("MinHeap", () => {
  it("Should add item to the heap", () => {
    let heap = new MinHeap();
    heap.add(10);
    heap.add(20);
    heap.add(-1);

    expect(heap.count).to.equal(3);
  });
  it("should return min value when pop", () => {
    let heap = new MinHeap();
    heap.add(10);
    heap.add(20);
    heap.add(-1);
    expect(heap.extractMin()).to.equal(-1);
    expect(heap.extractMin()).to.equal(10);
    expect(heap.extractMin()).to.equal(20);
  });
});
