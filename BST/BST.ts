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

  public remove(key: number): TreeNode {
    return this.removeHelper(this.root, key);
  }
  private removeHelper(root: TreeNode, key: number): TreeNode {
    if (!root) return;

    //if key is less than the root node,recurse left subtree
    if (key < root.data) {
      root.left = this.removeHelper(root.left, key);
    }
    // if key is more than the root node,recurse right subtree
    else if (key > root.data) {
      root.right = this.removeHelper(root.right, key);
    }
    //else we found the key
    else {
      //case 1: Node to be deleted has no children
      if (root.left === null && root.right == null) {
        //update root to null
        return null;
      }
      //case 2 : node to be deleted has two children
      else if (root.left !== null && root.right != null) {
        let maxNode = this.findMaximumKey(root.left);
        //copy the value
        root.data = maxNode.data;
        root.right = this.removeHelper(root.left, maxNode.data);
      }
      //node to be deleted has one children
      else {
        let child = root.left != null ? root.left : root.right;
        root = child;
      }
    }

    return root;
  }
  private findMaximumKey(node: TreeNode): TreeNode {
    while (node.right) {
      node = node.right;
    }
    return node;
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
