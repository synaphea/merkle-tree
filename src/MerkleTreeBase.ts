import * as CryptoJS from 'crypto-js';

import { MerkleTreeNode } from './MerkleTreeNode';

export abstract class MerkleTreeBase {
  protected _items: Array<string>;
  protected _hashFun: Function;

  constructor (
    _items: Array<string>,
    _hashFun: Function = CryptoJS.SHA256
  ) {
    this._items = _items;
    this._hashFun = _hashFun;
  }

  getLeafNodes (): Array<MerkleTreeNode> {
    return this._items.map((item) => {
      const node = new MerkleTreeNode();
      node.value = this._hashFun(item);
      return node;
    });
  }

  getLeafHashes (): Array<string> {
    return this._items.map((item) => {
      return this._hashFun(item);
    });
  }
}
