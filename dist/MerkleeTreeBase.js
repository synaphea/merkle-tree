"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const MerkleeTreeNode_1 = require("./MerkleeTreeNode");
class MerkleeTreeBase {
    constructor(_items, _hashFun = CryptoJS.SHA256) {
        this._items = _items;
        this._hashFun = _hashFun;
    }
    getLeafNodes() {
        return this._items.map((item) => {
            const node = new MerkleeTreeNode_1.MerkleeTreeNode();
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
exports.MerkleeTreeBase = MerkleeTreeBase;
