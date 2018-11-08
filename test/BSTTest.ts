import { expect } from "chai";
import { BinarySearchTree } from "../BST/BST";

describe("Binary Search Tree", () => {
  it("Should insert the element", () => {
    let tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(10);
    tree.insert(-1);
    tree.insert(-10);
    let result = tree.print();
    expect(result).to.be.an("Array");
    expect(result).to.deep.equal([-10, -1, 1, 10]);
  });
  it("should return max value from the tree", () => {
    let tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(10);
    tree.insert(-1);
    tree.insert(-10);
    let result = tree.findMax();
    expect(result).to.be.an("number");
    expect(result).to.equal(10);
  });
  it("should return min value from the tree", () => {
    let tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(10);
    tree.insert(-1);
    tree.insert(-10);
    let result = tree.findMin();
    expect(result).to.be.an("number");
    expect(result).to.equal(-10);
  });
  it("should remove the given key from the tree", () => {
    let tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(10);
    tree.insert(-1);
    tree.insert(-10);
    tree.remove(-1);
    let result = tree.print();
    expect(result).to.be.an("Array");
    expect(result).to.deep.equal([-10, 1, 10]);
  });
});
