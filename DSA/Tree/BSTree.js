const BinarySearchTree = {
  tree: [],

  insert: (value) => {
    if (BinarySearchTree.tree.length === 0) {
      BinarySearchTree.tree.push(value);
    } else {
      BinarySearchTree.insertRecursive(value, 0);
    }
  },

  insertRecursive: (value, index) => {
    if (value < BinarySearchTree.tree[index]) {
      const leftChildIndex = 2 * index + 1;
      if (BinarySearchTree.tree[leftChildIndex] === undefined) {
        BinarySearchTree.tree[leftChildIndex] = value;
      } else {
        BinarySearchTree.insertRecursive(value, leftChildIndex);
      }
    } else {
      const rightChildIndex = 2 * index + 2;
      if (BinarySearchTree.tree[rightChildIndex] === undefined) {
        BinarySearchTree.tree[rightChildIndex] = value;
      } else {
        BinarySearchTree.insertRecursive(value, rightChildIndex);
      }
    }
  },
};

// Example usage:
BinarySearchTree.insert(10);
BinarySearchTree.insert(5);
BinarySearchTree.insert(15);
BinarySearchTree.insert(3);
BinarySearchTree.insert(7);
BinarySearchTree.insert(12);
BinarySearchTree.insert(18);

console.log(BinarySearchTree.tree); // Output: [10, 5, 15, 3, 7, 12, 18]

//     10
//    /  \
//   5    15
//  / \  / \
// 3  7 12 18
