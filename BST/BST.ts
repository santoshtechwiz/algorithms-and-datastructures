class TreeNode {
  constructor(
    public data: number,
    public left: TreeNode = null,
    public right: TreeNode = null
  ) {}
}

export class BinarySearchTree {
  constructor(private root: TreeNode = null) {}

  public insert(data: number): void {
    let newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (data < this.root.data) {
        if (current.left == null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (data > this.root.data) {
        if (current.right == null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  public findMax(): number {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
  public findMin(): number {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }
  public print(): Array<number> {
    let result = [];
    let inorder = root => {
      if (root) {
        inorder(root.left);
        result.push(root.data);
        inorder(root.right);
      }
    };
    inorder(this.root);
    return result;
  }
}
