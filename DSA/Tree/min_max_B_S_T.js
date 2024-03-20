function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

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

function insert(root, data) {
  const newNode = Node(data);
  if (root === null) {
    root = newNode;
  } else {
    insertNode(root, newNode);
  }
  return root;
}

function findMinValue(root) {
  if (root === null) {
    return null;
  }

  let current = root;
  while (current.left !== null) {
    current = current.left;
  }

  return current.data;
}

function findMaxValue(root) {
  if (root === null) {
    return null;
  }

  let current = root;
  while (current.right !== null) {
    current = current.right;
  }

  return current.data;
}

// Example usage:
let root = null;
root = insert(root, 10);
insert(root, 5);
insert(root, 15);
insert(root, 3);
insert(root, 7);

console.log("Minimum value:", findMinValue(root)); // Output: 3
console.log("Maximum value:", findMaxValue(root)); // Output: 15
