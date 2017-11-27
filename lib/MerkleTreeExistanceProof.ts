import * as CryptoJS from 'crypto-js';

import { MerkleTreePath } from './MerkleProofPath';
import { MerkleTreeNode } from './MerkleTreeNode';
import { MerkleTreeBase } from './MerkleTreeBase';

export class MerkleTreeExistanceProof extends MerkleTreeBase {
  protected _root: MerkleTreeNode;

  constructor (
    _items: Array<string>,
     _hashFun: Function = CryptoJS.SHA256
  ) {
    super(_items, _hashFun);

    this._root = new MerkleTreeNode();
  }

  get root (): string {
    return this._root.value.toString();
  }

  getProofPath (value: string): Array<MerkleTreePath> {
    const node = new MerkleTreeNode();
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

  private visit (root: MerkleTreeNode, node: MerkleTreeNode): Array<MerkleTreePath> {
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

  private calculate (items: Array<MerkleTreeNode>): Array<MerkleTreeNode> {
    const tempItems: Array<MerkleTreeNode> = [];

    for (let index = 0; index < items.length; index = index + 2) {
      const node = new MerkleTreeNode();
      node.left = items[index];
      node.right = items[index + 1];
      node.value = this._hashFun(node.left.value + node.right.value);
      tempItems.push(node);
    }

    return tempItems;
  }
}
