const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('( )');
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
    if (position > 0 && typeof position === 'number' && Number.isInteger(position) && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.chain.join('~~');
    this.chain = [];
    return resultChain;
  },
};

module.exports = {
  chainMaker,
};
