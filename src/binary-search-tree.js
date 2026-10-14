const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootT = null;
  }

  root() {
    return this.rootT;
  }

  add(data) {
    if (!this.rootT) {
      this.rootT = new Node(data);
      return;
    }
    let current = this.rootT;
    while (true) {
      if (data === current.data) return;
      if (data < current.data) {
        if (!current.left) {
          current.left = new Node(data);
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new Node(data);
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootT;
    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    let parent = null;
    let current = this.rootT;

    while (current && current.data !== data) {
      parent = current;
      current = data < current.data ? current.left : current.right;
    }
    if (!current) return;

    if (current.left && current.right) {
      let successorParent = current;
      let successor = current.right;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
      current.data = successor.data;
      parent = successorParent;
      current = successor;
    }

    const child = current.left || current.right;
    if (!parent) this.rootT = child;
    else if (parent.left === current) parent.left = child;
    else parent.right = child;
  }

  min() {
    if (!this.rootT) return null;
    let current = this.rootT;
    while (current.left) current = current.left;
    return current.data;
  }

  max() {
    if (!this.rootT) return null;
    let current = this.rootT;
    while (current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
