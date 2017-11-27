import { MerkleeTreeNode } from './MerkleeTreeNode';
export declare abstract class MerkleeTreeBase {
    protected _items: Array<string>;
    protected _hashFun: Function;
    constructor(_items: Array<string>, _hashFun?: Function);
    getLeafNodes(): Array<MerkleeTreeNode>;
    getLeafHashes(): Array<string>;
}
