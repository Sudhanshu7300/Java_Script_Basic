// Head || Tail  || Node || Value || Next
// node  show inside  Java script  in Object_form
// Head -> [ Node(data: 1) ] -> [ Node(data: 2) ] -> [ Node(data: 3) ] -> null (Tail)
// +------+        +------+        +------+        +------+
// Head ---> |  1   | -----> |  2   | -----> |  3   | -----> | null |
//           +------+        +------+        +------+        +------+




// Lead Node Next head / element
const Node = (data) => ({
  data,
  next: null,
});

const LinkedList = () => {
  let head = null;

  // Method to insert a new node at the end of the linked list
  const append = (data) => {
    const newNode = Node(data);
    if (!head) {
      head = newNode;
      return;
    }
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  };

  // Method to display the linked list
  const display = () => {
    let current = head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  };

  return { append, display };
};

// Example usage:
const linkedList = LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.display();
console.log("linkedList", linkedList);

// // Define a function to create a new node
// const Node = (data) => ({
//   data,
//   next: null,
// });

// // Define a function to create a linked list from an array
// const arrayToLinkedList = (arr) => {
//   let head = null;

//   // Method to insert a new node at the end of the linked list
//   const append = (data) => {
//     const newNode = Node(data);
//     if (!head) {
//       head = newNode;
//       return;
//     }
//     let current = head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = newNode;
//   };

//   // Method to display the linked list
//   const display = () => {
//     let current = head;
//     const result = [];
//     while (current !== null) {
//       result.push(current.data);
//       current = current.next;
//     }
//     return result;
//   };

//   // Convert the array to linked list
//   arr.forEach((element) => {
//     append(element);
//   });

//   return { display };
// };

// // Example usage:
// const arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// const linkedList = arrayToLinkedList(arr);
// console.log(linkedList.display()); // Display the linked list
