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

  remove(data) {
      this.rootNode = deleteNode(this.rootNode, data)

      function deleteNode(node, data) {
          if (!node) {
              return null;
          }
          if (data < node.data) {
              node.left = deleteNode(node.left, data)
              {
                  return node
              }
          }
          if (data > node.data) {
              node.right = deleteNode(node.right, data)
              {
                  return node
              }
          }
        else {
            if (!node.left){
                return node.right
            }
            if (!node.right){
                return node.left
            }
            let minRight = minimum(node.right)
              node.data = minRight.data
              node.right = deleteNode(node.right, minRight.data);
              return node;
          }
      }
      function minimum(node) {
          while (node.left) {
              node = node.left;
          }
          return node;
      }
  }

  min() {
    if (!this.rootNode){
        return null;
    }
    let rootCur = this.rootNode
      while (rootCur.left){
        rootCur = rootCur.left
      }
    return rootCur.data
  }

  max() {
      if (!this.rootNode){
          return null;
      }
      let rootCur = this.rootNode
      while (rootCur.right){
          rootCur = rootCur.right
      }
      return rootCur.data
  }
}

module.exports = {
  BinarySearchTree
};