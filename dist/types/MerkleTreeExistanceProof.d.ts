import { MerkleTreePath } from './MerkleeProofPath';
import { MerkleeTreeNode } from './MerkleeTreeNode';
import { MerkleeTreeBase } from './MerkleeTreeBase';
export declare class MerkleTreeExistanceProof extends MerkleeTreeBase {
    protected _root: MerkleeTreeNode;
    constructor(_items: Array<string>, _hashFun?: Function);
    readonly root: string;
    getProofPath(value: string): Array<MerkleTreePath>;
    create(): void;
    private visit(root, node);
    private concatPath(path, node);
    private calculate(items);
}
