function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function insertNode(node, newNode) {
  if (node.left === null) {
    node.left = newNode;
  } else if (node.right === null) {
    node.right = newNode;
  } else {
    // This part is for maintaining a complete binary tree for demonstration
    insertNode(node.left, newNode);
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

function breadthFirstSearch(root) {
  const queue = [];
  const result = [];

  if (root !== null) {
    queue.push(root);

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return result;
}

// Example usage:
let root = null;
root = insert(root, 10);
insert(root, 5);
insert(root, 15);
insert(root, 3);
insert(root, 7);

console.log("Breadth-First Search result:", breadthFirstSearch(root));
