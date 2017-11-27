export { MerkleTreeSimple } from './MerkleTreeSimple';
export { MerkleTreeExistanceProof } from './MerkleTreeExistanceProof';

export interface IHashFunctions {
  hash: (type: string, value: string) => string;
}

const Hash: IHashFunctions = require('../lib/binding/module.node');

export {
  Hash
};
