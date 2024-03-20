// Traversing Tree || PreOrder || InOrder || PostOrder
// Depth-First Search (DFS):
// DFS is an algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores as far as possible along each branch before backtracking.
function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function preOrderTraversal(node, result) {
  if (node !== null) {
    result.push(node.data);
    preOrderTraversal(node.left, result);
    preOrderTraversal(node.right, result);
  }
}

function inOrderTraversal(node, result) {
  if (node !== null) {
    inOrderTraversal(node.left, result);
    result.push(node.data);
    inOrderTraversal(node.right, result);
  }
}

function postOrderTraversal(node, result) {
  if (node !== null) {
    postOrderTraversal(node.left, result);
    postOrderTraversal(node.right, result);
    result.push(node.data);
  }
}

// Example usage:
const root = Node(10);
root.left = Node(5);
root.right = Node(15);
root.left.left = Node(3);
root.left.right = Node(7);

const preOrderResult = [];
preOrderTraversal(root, preOrderResult);
console.log("PreOrder Traversal:", preOrderResult);

const inOrderResult = [];
inOrderTraversal(root, inOrderResult);
console.log("InOrder Traversal:", inOrderResult);

const postOrderResult = [];
postOrderTraversal(root, postOrderResult);
console.log("PostOrder Traversal:", postOrderResult);
