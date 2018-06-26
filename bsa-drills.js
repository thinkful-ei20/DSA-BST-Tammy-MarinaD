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

function findHeight(tree) {
  if(!tree) {
    return 0;
  }
  const leftHeight = findHeight(tree.left);
  const rightHeight = findHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

const isBst = (bst) => {
//check if value at left is less than key
// check that value at right is greater than key
//input is a bst (or just bt)
// output true or false
// start at the root- go down to left & right
// recursively check if there is a left or right
// if left is greater than key, return false
// if right is less than key return false
// do for each node - if the node matches requirments based
// on its parent, then do the whole thing again on that node;

  if (!bst.left && !bst.right){
    return true;
  }


  if (bst.left){
    if (bst.left.key < bst.key){
      return isBst(bst.left);
    } else {
      return false;
    }
  }
  if (bst.right){
    if (bst.right.key > bst.key){
      return isBst(bst.right);
    }
    else {
      return false;
    }
  }  
};

const printTree = (tree) => {
  if (tree.right) printTree(tree.right);

  console.log(tree.key);
  
  if (tree.left) printTree(tree.left);
};

const thirdLargest = (tree) => {
  
  let counter = 0;
  let result;

  const recursive = (tree) => {
    if (tree.right) recursive(tree.right);
    counter++;
    if (counter === 3) {
      result = tree.key;
    }
    if (counter >= 3){
      return;
    }
    if (tree.left) recursive(tree.left);
  };
  
  recursive(tree);
  return result;
};

const main = () => {
  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(6);
  bst.insert(9);
  bst.insert(2);
  bst.insert(5);
  bst.insert(7);
  // bst.left = {
  //   key : 40,
  //   left : null,
  //   right : null,
  //   value : null
  // };
  // console.log(bst);
  // printTree(bst);
  console.log(thirdLargest(bst));
  // console.log(bstHeight(bst));
  // console.log(findHeight(bst));
  // console.log(isBst(bst));

};

main();

// if right ->print all to right
// print self
// if left -> print all to left

