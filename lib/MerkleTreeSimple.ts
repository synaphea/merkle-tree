import * as CryptoJS from 'crypto-js';

import { MerkleTreeNode } from './MerkleTreeNode';
import { MerkleTreeBase } from './MerkleTreeBase';

export class MerkleTreeSimple extends MerkleTreeBase {
  private _root: string;

  get root (): string {
    return this._root;
  }

  constructor (
    _items: Array<string>,
    _hashFun: Function = CryptoJS.SHA256
  ) {
    super(_items, _hashFun);
    this._root = '';
  }

  create () {
    const items = this.clone(this._items);

    let level = this.calculate(items);
    while (level.length > 1) {
      level = this.calculate(level);
    }

    this._root = level[0];
  }

  private calculate (items: Array<string>) {
    const tempItems: Array<string> = [];

    for (let index = 0; index < items.length; index = index + 2) {
      let left = items[index];
      let right = items[index + 1] || '';
      tempItems.push(this._hashFun(left + right).toString());
    }

    return tempItems;
  }

  private clone (items: Array<string>) {
    const tempItems: Array<string> = [];

    items.forEach(item => {
      tempItems.push(item);
    });

    return tempItems;
  }
}
