export class TrieNode {
  public children: Map<string, TrieNode | undefined> = new Map();
  public isEnd: boolean;
  constructor() {
    this.isEnd = false;
  }
}

export class Trie {
  constructor(private root: TrieNode = new TrieNode()) {}
  public insert(word: string): void {
    let current: TrieNode | undefined = this.root;
    current;
    let i = 0;
    while (i < word.length && current.children.has(word[i])) {
      current = current.children.get(word[i]);
      i++;
    }
    word[i];
    if (i === word.length) {
      current.isEnd = true;
      return;
    }
    while (i < word.length) {
      let newNode: TrieNode = new TrieNode();

      newNode.children.set(word[i], newNode);
      current = newNode;
      i++;
    }

    current.isEnd = true;

    return;
  }
  public search(word: string): boolean {
    let current: TrieNode = this.root;

    let i = 0;
    while (i < word.length && current.children.has(word[i])) {
      current = current.children.get(word[i]);
      i++;
    }
    if (i === word.length && current.isEnd) return true;
    return false;
  }
}

let t = new Trie();
t.insert("santosh");
t.insert("san");
t.insert("ashok");

var x = t.search("santosh");
t;
x;
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}
