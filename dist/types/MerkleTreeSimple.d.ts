import { MerkleTreeBase } from './MerkleTreeBase';
export declare class MerkleTreeSimple extends MerkleTreeBase {
    private _root;
    readonly root: string;
    constructor(_items: Array<string>, _hashFun?: Function);
    create(): void;
    private calculate(items);
    private clone(items);
}
