"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const MerkleTreeNode_1 = require("./MerkleTreeNode");
const MerkleTreeBase_1 = require("./MerkleTreeBase");
class MerkleTreeExistanceProof extends MerkleTreeBase_1.MerkleTreeBase {
    constructor(_items, _hashFun = CryptoJS.SHA256) {
        super(_items, _hashFun);
        this._root = new MerkleTreeNode_1.MerkleTreeNode();
    }
    get root() {
        return this._root.value.toString();
    }
    getProofPath(value) {
        const node = new MerkleTreeNode_1.MerkleTreeNode();
        node.value = this._hashFun(value);
        return this.visit(this._root, node);
    }
    create() {
        if (this._items.length === 0) {
            return;
        }
        const items = this.getLeafNodes();
        let level = this.calculate(items);
        while (level.length > 1) {
            level = this.calculate(level);
        }
        this._root = level[0];
    }
    getHash(value) {
        return this._hashFun(value).toString();
    }
    visit(root, node) {
        if (root.isLeaf()) {
            return [];
        }
        if (root.left.value.toString() === node.value.toString()) {
            return [{
                    right: root.right.value.toString()
                }];
        }
        if (root.right.value.toString() === node.value.toString()) {
            return [{
                    left: root.left.value.toString()
                }];
        }
        let items = this.visit(root.left, node);
        if (items.length > 0) {
            return this.concatPath(items, {
                right: root.right.value.toString()
            });
        }
        items = this.visit(root.right, node);
        if (items.length > 0) {
            return this.concatPath(items, {
                left: root.left.value.toString()
            });
        }
        return [];
    }
    concatPath(path, node) {
        path.push(node);
        return path;
    }
    calculate(items) {
        const tempItems = [];
        for (let index = 0; index < items.length; index = index + 2) {
            const node = new MerkleTreeNode_1.MerkleTreeNode();
            node.left = items[index];
            node.right = items[index + 1];
            node.value = this._hashFun(node.left.value + node.right.value);
            tempItems.push(node);
        }
        return tempItems;
    }
}
exports.MerkleTreeExistanceProof = MerkleTreeExistanceProof;
