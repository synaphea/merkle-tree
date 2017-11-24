import * as CryptoJS from 'crypto-js';

export interface MerkleTreePath {
  right?: string;
  left?: string;
}

class MerkleeTreeNode {
  _left: MerkleeTreeNode;
  _right: MerkleeTreeNode;
  _value: string;

  constructor () {
    this._value = '';
  }

  set left (value: MerkleeTreeNode) {
    this._left = value;
  }

  set right (value: MerkleeTreeNode) {
    this._right = value;
  }

  set value (value: string) {
    this._value = value;
  }

  get left (): MerkleeTreeNode {
    return this._left || new MerkleeTreeNode();
  }

  get right (): MerkleeTreeNode {
    return this._right || new MerkleeTreeNode();
  }

  get value (): string {
    return this._value;
  }
}

export class MerkleTreeValidator {
  private _root: MerkleeTreeNode;

  get root (): string {
    return this._root.value;
  }

  constructor (
    private _items: Array<string>,
    private _hashFun: Function = CryptoJS.SHA256
  ) {
    this._root = new MerkleeTreeNode();
  }

  create (): void {
    const items = this.getNodes(this._items);

    let level = this.calculate(items);

    while (level.length > 1) {
      level = this.calculate(level);
    }
    this._root = level[0];
  }

  private calculate (items: Array<MerkleeTreeNode>): Array<MerkleeTreeNode> {
    const tempItems: Array<MerkleeTreeNode> = [];

    for (let index = 0; index < items.length; index = index + 2) {
      const node = new MerkleeTreeNode();
      node.left = items[index];
      node.right = items[index + 1];
      node.value = this._hashFun(node._left.value + node._right.value);
      tempItems.push(node);
    }

    return tempItems;
  }

  private getNodes (value: Array<string>): Array<MerkleeTreeNode> {
    return value.map((item) => {
      const node = new MerkleeTreeNode();
      node.value = this._hashFun(item);
      return node;
    });
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
