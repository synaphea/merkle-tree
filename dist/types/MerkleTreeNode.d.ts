export declare class MerkleTreeNode {
    private _left;
    private _right;
    private _value;
    constructor(left?: MerkleTreeNode, right?: MerkleTreeNode);
    isEmpty(): boolean;
    isLeaf(): boolean;
    left: MerkleTreeNode;
    right: MerkleTreeNode;
    value: string;
}
