import * as CryptoJS from 'crypto-js';

import { MerkleeTreeNode } from './MerkleeTreeNode';

export abstract class MerkleeTreeBase {
  protected _items: Array<string>;
  protected _hashFun: Function;

  constructor (
    _items: Array<string>,
    _hashFun: Function = CryptoJS.SHA256
  ) {
    this._items = _items;
    this._hashFun = _hashFun;
  }

  getLeafNodes (): Array<MerkleeTreeNode> {
    return this._items.map((item) => {
      const node = new MerkleeTreeNode();
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
