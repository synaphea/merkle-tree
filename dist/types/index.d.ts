export { MerkleeTreeSimple } from './MerkleeTreeSimple';
export { MerkleTreeExistanceProof } from './MerkleTreeExistanceProof';
export interface IHashFunctions {
    hash: (type: string, value: string) => string;
}
declare const Hash: IHashFunctions;
export { Hash };
