/* tslint:disable:no-unused-expression */
import * as CryptoJS from 'crypto-js';

import { MerkleTreeNode } from '../src/MerkleTreeNode';

import { expect } from 'chai';

const _hashFun = CryptoJS.SHA256;

describe(`Create a node`, () => {
  it('Check the creation of a node', () => {
    const node = new MerkleTreeNode();
    expect(node.value).to.equal('');
    expect(node.left.isLeaf()).to.true;
    expect(node.right.isLeaf()).to.true;
    expect(node.left.isEmpty()).to.true;
    expect(node.right.isEmpty()).to.true;
    expect(node.isEmpty()).to.true;
  });
});
