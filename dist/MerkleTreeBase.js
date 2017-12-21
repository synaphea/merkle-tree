"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const MerkleTreeNode_1 = require("./MerkleTreeNode");
class MerkleTreeBase {
    constructor(_items, _hashFun = CryptoJS.SHA256) {
        this._items = _items;
        this._hashFun = _hashFun;
    }
    getLeafNodes() {
        return this._items.map((item) => {
            const node = new MerkleTreeNode_1.MerkleTreeNode();
            node.value = this._hashFun(item);
            return node;
        });
    }
    getLeafHashes() {
        return this._items.map((item) => {
            return this._hashFun(item);
        });
    }
}
exports.MerkleTreeBase = MerkleTreeBase;
