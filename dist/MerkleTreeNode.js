"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MerkleTreeNode {
    constructor(left, right) {
        this._value = '';
        this._left = left;
        this._right = right;
    }
    isEmpty() {
        return this._value === '' && this.isLeaf();
    }
    isLeaf() {
        return this._left == null && this._right == null;
    }
    set left(value) {
        this._left = value;
    }
    set right(value) {
        this._right = value;
    }
    set value(value) {
        this._value = value;
    }
    get left() {
        return this._left || new MerkleTreeNode();
    }
    get right() {
        return this._right || new MerkleTreeNode();
    }
    get value() {
        return this._value;
    }
}
exports.MerkleTreeNode = MerkleTreeNode;
