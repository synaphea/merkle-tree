import { MerkleTreeNode } from './MerkleTreeNode';
export declare abstract class MerkleTreeBase {
    protected _items: Array<string>;
    protected _hashFun: Function;
    constructor(_items: Array<string>, _hashFun?: Function);
    getLeafNodes(): Array<MerkleTreeNode>;
    getLeafHashes(): Array<string>;
}
