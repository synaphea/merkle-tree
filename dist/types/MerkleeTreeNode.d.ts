export declare class MerkleeTreeNode {
    private _left;
    private _right;
    private _value;
    constructor(left?: MerkleeTreeNode, right?: MerkleeTreeNode);
    isEmpty(): boolean;
    isLeaf(): boolean;
    left: MerkleeTreeNode;
    right: MerkleeTreeNode;
    value: string;
}
