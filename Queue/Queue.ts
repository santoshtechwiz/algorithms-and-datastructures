export class Queue<T> {
  constructor(private items: T[] = []) {}
  public enqueue(item: T) {
    this.items.push(item);
  }
  public dequeue(): T {
    if (this.items.length == 0) throw new Error("Queue is empty");
    return this.items.shift();
  }
  public get count(): number {
    return this.items.length;
  }
  public get isEmpty(): boolean {
    return this.items.length === 0;
  }
  public get queueItems(): T[] {
    return this.items;
  }
}
