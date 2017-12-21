import { MerkleTreePath } from './MerkleProofPath';
import { MerkleTreeNode } from './MerkleTreeNode';
import { MerkleTreeBase } from './MerkleTreeBase';
export declare class MerkleTreeExistanceProof extends MerkleTreeBase {
    protected _root: MerkleTreeNode;
    constructor(_items: Array<string>, _hashFun?: Function);
    readonly root: string;
    getProofPath(value: string): Array<MerkleTreePath>;
    create(): void;
    getHash(value: string): string;
    private visit(root, node);
    private concatPath(path, node);
    private calculate(items);
}
