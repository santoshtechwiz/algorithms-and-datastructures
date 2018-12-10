class ListNode {
  constructor(private data: number, public next: ListNode = null) {}
}

function createList(): ListNode {
  let node = new ListNode(1);
  node.next = new ListNode(2);
  node.next.next = node;
}

let x = createList();

x;
