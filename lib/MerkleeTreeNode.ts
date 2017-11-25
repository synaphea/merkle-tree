export class MerkleeTreeNode {
  _left: MerkleeTreeNode;
  _right: MerkleeTreeNode;
  _value: string;

  constructor () {
    this._value = '';
  }

  isLeaf (): boolean {
    return this._left == null && this._right == null;
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