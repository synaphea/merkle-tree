"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const MerkleTreeBase_1 = require("./MerkleTreeBase");
class MerkleTreeSimple extends MerkleTreeBase_1.MerkleTreeBase {
    get root() {
        return this._root;
    }
    constructor(_items, _hashFun = CryptoJS.SHA256) {
        super(_items, _hashFun);
        this._root = '';
    }
    create() {
        const items = this.clone(this._items);
        let level = this.calculate(items);
        while (level.length > 1) {
            level = this.calculate(level);
        }
        this._root = level[0];
    }
    calculate(items) {
        const tempItems = [];
        for (let index = 0; index < items.length; index = index + 2) {
            let left = items[index];
            let right = items[index + 1] || '';
            tempItems.push(this._hashFun(left + right).toString());
        }
        return tempItems;
    }
    clone(items) {
        const tempItems = [];
        items.forEach(item => {
            tempItems.push(item);
        });
        return tempItems;
    }
}
exports.MerkleTreeSimple = MerkleTreeSimple;
