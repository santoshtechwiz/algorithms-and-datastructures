class Node {
  private _next: Node;
  constructor(public val: number) {
    this._next = null;
  }
  public get Next() {
    return this._next;
  }
  public set Next(val) {
    this._next = val;
  }
}
export class LinkedList {
  private _head: Node;
  constructor() {
    this._head = null;
  }

  public addFirst(val: number) {
    let newNode = new Node(val);
    if (this._head == null) {
      this._head = newNode;
      return;
    }
    newNode.Next = this._head;
    this._head = newNode;
  }
  public addLast(val: number) {
    let newNode = new Node(val);
    if (this._head == null) {
      this._head = newNode;
      return;
    }
    let current = this._head;
    while (current.Next) {
      current = current.Next;
    }
    current.Next = newNode;
  }
  public removeHead() {
    if (this._head) {
      this._head = this._head.Next;
      return;
    }
  }
  public insertAt(pos: number, val: number) {
    //asuuming pos is less than linkedlist
    let newNode = new Node(val);
    if (pos === 0 && this._head === null) {
      this._head = newNode;
      return;
    }
    if (pos == 0 && this._head != null) {
      newNode.Next = this._head;
      this._head = newNode;
      return;
    }
    let prev: Node = null;
    let current: Node = this._head;
    while (pos > 0) {
      prev = current;
      current = current.Next;
      pos--;
    }
    prev.Next = newNode;
    newNode.Next = current;
  }
  public toString = (): string => {
    let result = "";
    let current = this._head;
    while (current) {
      result += current.val + "->";
      current = current.Next;
    }
    result += "NULL";
    return result;
  };
}
