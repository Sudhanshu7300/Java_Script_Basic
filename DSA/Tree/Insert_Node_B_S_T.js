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

  return {
    insert: insert,
    getRoot: function () {
      return root;
    },
  };
}

// Example usage:
const bst = BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.getRoot());

//       10
//     /    \
//    5      15
//   / \       \
//  3   7       20
