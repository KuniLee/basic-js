const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    parts: [],
    getLength() {
        return this.parts.length
    },
    addLink(value) {
        this.parts.push(value !== undefined ? " " + value + " " : " ")
        return this
    },
    removeLink(position) {
        if (isNaN(position) || !this.parts.hasOwnProperty(position - 1)) {
            this.parts = []
            throw new Error(`You can\'t remove incorrect link!`)
        }
        this.parts.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.parts.reverse()
        return this
    },
    finishChain() {
        const result = this.parts.map(el => '(' + el + ')').join("~~")
        this.parts = []
        return result
    }
};

module.exports = {
    chainMaker
};
