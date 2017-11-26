export { MerkleTreeSimple } from './Tree';

export interface IHashFunctions {
  hash: (type: string, value: string) => string;
}

const Hash: IHashFunctions = require('../lib/binding/module.node');

export {
  Hash
};
