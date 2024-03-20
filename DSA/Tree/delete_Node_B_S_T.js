function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function BinarySearchTree() {
  let root = null;

  function insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  function insert(data) {
    const newNode = Node(data);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  function findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  function deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.data) {
      node.left = deleteNode(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = deleteNode(node.right, value);
      return node;
    } else {
      // Case 1: No child
      if (node.left === null && node.right === null) {
        return null;
      }

      // Case 2: One child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Case 3: Two children
      const minRight = findMinNode(node.right);
      node.data = minRight.data;
      node.right = deleteNode(node.right, minRight.data);
      return node;
    }
  }

  function deleteValue(value) {
    root = deleteNode(root, value);
  }

  function getTree() {
    return root;
  }

  return {
    insert: insert,
    delete: deleteValue,
    getTree: getTree,
  };
}

// Example usage:
const bst = BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Original tree:", bst.getTree());
bst.delete(5);
console.log("Tree after deleting node with value 5:", bst.getTree());
