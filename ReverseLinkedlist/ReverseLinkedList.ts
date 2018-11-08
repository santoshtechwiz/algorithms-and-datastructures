export class ListNode {
  constructor(private val: number, public next: ListNode = null) {}
  public toString(): string {
    let result = "";
    let current: ListNode = this;
    while (current) {
      result += current.val + "->";
      current = current.next;
    }
    result += "NULL";
    return result;
  }

  /**
   * reverse
   node:Node   */
  public reverse(node: ListNode): ListNode {
    let prev = null;
    let current = node;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}
