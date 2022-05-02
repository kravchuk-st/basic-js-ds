const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
    this.root_1 = null;
  }

  root() {
    return this.root_1;
  }

  add(data) {
    this.root_1 = addNode(this.root_1, data);

    function addNode(node, data) {
      if (!node) return new Node(data);

      if (node.data == data) return node;

      if (data < node.data) node.left = addNode(node.left, data);
      else node.right = addNode(node.right, data);
      return node;
    }
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) return false;

      if (node.data == data) return true;

      if (data < node.data) return hasNode(node.left, data);
      else return hasNode(node.right, data);
    }
    return hasNode(this.root_1, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) return null;

      if (node.data == data) return node;

      if (data < node.data) return findNode(node.left, data);
      else return findNode(node.right, data);
    }
    return findNode(this.root_1, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) return null;

      if (node.data == data) {
        // У узла нет детей
        if (!node.left && !node.right) return null;
        // У узла только правый ребенок
        if (!node.left) return node.right;
        // У узла только левый ребенок
        if (!node.right) return node.left;
        // У узла двое детей
        let current = node.right;
        while (current.left) {
          current = current.left;
        }
        node.data = current.data;
        node.right = removeNode(node.right, current.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root_1 = removeNode(this.root_1, data);
  }

  min() {
    function minNode(node) {
      if (node.left) return minNode(node.left);
      else return node.data;
    }
    if (!this.root_1) return null;
    return minNode(this.root_1);
  }

  max() {
    function maxNode(node) {
      if (node.right) return maxNode(node.right);
      else return node.data;
    }
    if (!this.root_1) return null;
    return maxNode(this.root_1);
  }
}

module.exports = {
  BinarySearchTree
};
