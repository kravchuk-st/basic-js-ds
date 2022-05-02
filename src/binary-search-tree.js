const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

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
    this.rootT = addNode(this.rootT, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data == data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data == data) {
        return true;
      }

      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
    return hasNode(this.rootT, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data == data) {
        return node;
      }
      if (data < node.data) {
        return findNode(node.left, data);
      } else return findNode(node.right, data);
    }
    return findNode(this.rootT, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) return null;

      if (node.data == data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          return node.left;
        }
        if (!node.left) {
          return node.right;
        }
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
    this.rootT = removeNode(this.rootT, data);
  }

  min() {
    function minNode(node) {
      if (node.left) {
        return minNode(node.left);
      } else {
        return node.data;
      }
    }
    if (!this.rootT) {
      return null;
    }
    return minNode(this.rootT);
  }

  max() {
    function maxNode(node) {
      if (node.right) {
        return maxNode(node.right);
      } else {
        return node.data;
      }
    }
    if (!this.rootT) {
      return null;
    }
    return maxNode(this.rootT);
  }
}

module.exports = {
  BinarySearchTree
};
