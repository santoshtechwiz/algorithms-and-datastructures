import { expect } from "chai";
import { ListNode } from "../ReverseLinkedlist/ReverseLinkedList";
describe("ReverseLinkedlist", () => {
  it("should return the given linkedlist", () => {
    let node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(4);
    expect(node.toString()).to.be.equal("1->2->4->NULL");
    var rev = node.reverse(node);
    expect(rev.toString()).to.be.equal("4->2->1->NULL");
  });
});
