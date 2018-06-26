'use strict';
const BinarySearchTree = require('./bsa-class');
const bst = new BinarySearchTree();
//find the minimun
//count every time you traverse down
//find the max
//count every time you traverse down
//compare the two totals

//if (this.left !== null)
//hitting null means end of tree
// return the call again on this.left

//if (this.right !== null)
//return the call on the right

//input: takes in a bst
//output: returns the count of levels

const bstHeight = (bst) => {
  //helper function to find height on left
  let leftHeight = findMinHeight(bst);
  //helper function to find height on right
  let rightHeight = findMaxHeight(bst);
  //compares the heights
  if (leftHeight > rightHeight){
    return `The height is ${leftHeight}`;
  } else {
    return `The height is ${rightHeight}`;
  }
  //run time is o(n)
  //checks through both sides to the end of the tree
};

const findMinHeight = (bst) =>{
  if (!bst.left && !bst.right){
    return 1;
  }
  else if (bst.right){
    return 1 + findMaxHeight(bst.right);
    
  }
  return 1 + findMinHeight(bst.left);  
};

const findMaxHeight = (bst) =>{
  if (!bst.right && !bst.right){
    return 1;
  }
  else if (bst.left){
    return 1 + findMinHeight(bst.left);
  }
  return 1 + findMaxHeight(bst.right);  
};



const main = () => {
  bst.insert(20);
  bst.insert(10);
  bst.insert(30);
  bst.insert(5);
  // bst.insert(15);
  // bst.insert(17);
  // bst.insert(18);
  // bst.insert(19);
  bst.insert(25);
  console.log(bst);
  console.log(bstHeight(bst));

};

main();

