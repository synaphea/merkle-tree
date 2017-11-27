import { MerkleeTreeBase } from './MerkleeTreeBase';
export declare class MerkleeTreeSimple extends MerkleeTreeBase {
    private _root;
    readonly root: string;
    constructor(_items: Array<string>, _hashFun?: Function);
    create(): void;
    private calculate(items);
    private clone(items);
}
