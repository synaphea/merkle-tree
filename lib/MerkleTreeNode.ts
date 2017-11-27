export class MerkleTreeNode {

  private _left: MerkleTreeNode | undefined;
  private _right: MerkleTreeNode | undefined;
  private _value: string;

  constructor (left?: MerkleTreeNode, right?: MerkleTreeNode) {
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

  set left (value: MerkleTreeNode) {
    this._left = value;
  }

  set right (value: MerkleTreeNode) {
    this._right = value;
  }

  set value (value: string) {
    this._value = value;
  }

  get left (): MerkleTreeNode {
    return this._left || new MerkleTreeNode();
  }

  get right (): MerkleTreeNode {
    return this._right || new MerkleTreeNode();
  }

  get value (): string {
    return this._value;
  }
}
