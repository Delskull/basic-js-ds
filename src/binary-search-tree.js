const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;

  }

}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
   const newNode = new Node(data);
   if (!this.rootNode){
     return this.rootNode = newNode;
   }
    addNewNode(this.rootNode , newNode);
   function  addNewNode (node, newNode){
     if (newNode.data < node.data){
       if (!node.left){
         node.left = newNode;
       }
       else {
         addNewNode(node.left , newNode)
       }
     }
     else {
       if (!node.right){
         node.right = newNode
       }
       else {
         addNewNode(node.right , newNode)
       }
     }
   }
  }

  has(data) {
    return hasObj(this.rootNode, data);
    function hasObj(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return hasObj(node.left, data);
      } else {
        return hasObj(node.right, data);
      }
    }
  }

  find(data) {
 return findObj(this.rootNode , data)
    function findObj(node,data){
   if (!node){
     return null;
   }
   else if ( node.data === data){
     return node;
   }
   else if ( node.data < data){
     return findObj(node.right , data)
   }
   else if ( node.data > data){
     return findObj(node.left , data)
   }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};