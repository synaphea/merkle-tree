export class MerkleeTreeNode {

  private _left: MerkleeTreeNode | undefined;
  private _right: MerkleeTreeNode | undefined;
  private _value: string;

  constructor (left?: MerkleeTreeNode, right?: MerkleeTreeNode) {
    this._value = '';
    this._left = left;
    this._right = right;
  }

  isEmpty (): boolean {
    return this._value === '' && this.isLeaf();
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
