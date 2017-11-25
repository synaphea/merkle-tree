import * as CryptoJS from 'crypto-js';

import { MerkleTreePath } from './MerkleeProofPath';
import { MerkleeTreeNode } from './MerkleeTreeNode';

export abstract class MerkleeTreeAbstract {
  protected _items: Array<string>;
  protected _hashFun: Function;
  protected _root: MerkleeTreeNode;

  get root (): string {
    return this._root.value.toString();
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

export class MerkleTreeValidator extends MerkleeTreeAbstract {
  constructor (
    _items: Array<string>,
     _hashFun: Function = CryptoJS.SHA256
  ) {
    super();
    this._items = _items;
    this._hashFun = _hashFun;
    this._root = new MerkleeTreeNode();
  }

  getProofPath (value: string): Array<MerkleTreePath> {
    const node = new MerkleeTreeNode();
    node.value = this._hashFun(value);
    return this.visit (this._root, node);
  }

  create (): void {
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

  private visit (root: MerkleeTreeNode, node: MerkleeTreeNode): Array<MerkleTreePath> {
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

  private concatPath (path: Array<MerkleTreePath>, node: MerkleTreePath): Array<MerkleTreePath> {
    path.push(node);
    return path;
  }

  private calculate (items: Array<MerkleeTreeNode>): Array<MerkleeTreeNode> {
    const tempItems: Array<MerkleeTreeNode> = [];

    for (let index = 0; index < items.length; index = index + 2) {
      const node = new MerkleeTreeNode();
      node.left = items[index];
      node.right = items[index + 1];
      node.value = this._hashFun(node.left.value + node.right.value);
      tempItems.push(node);
    }

    return tempItems;
  }
}
export class MerkleTree {
  private _root: string;

  get root (): string {
    return this._root;
  }

  constructor (
    private _items: Array<string>,
    private _hashFun: Function = CryptoJS.SHA256
  ) {
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
