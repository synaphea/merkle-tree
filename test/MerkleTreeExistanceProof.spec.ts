import * as CryptoJS from 'crypto-js';

import { MerkleTreeExistanceProof } from '../lib/MerkleTreeExistanceProof';

import { expect } from 'chai';

const _hashFun = CryptoJS.SHA256;

describe(`[Even] Create a Merkle tree`, () => {
  it('Check the creation of merklee tree', () => {
    const items = ['a', 'b', 'c', 'd'];
    const tree = new MerkleTreeExistanceProof(items, _hashFun);
    tree.create();
    expect(tree.root).to.equal(
      '58c89d709329eb37285837b042ab6ff72c7c8f74de0446b091b6a0131c102cfd'
    );
  });

  it('[Odd] Check the creation of merklee tree', () => {
    const items = ['a', 'b', 'c', 'd', 'e'];
    const tree = new MerkleTreeExistanceProof(items, _hashFun);
    tree.create();
    expect(tree.root).to.equal(
      'd6246621103b5050cf32df614c5017e91853d47a19fe5d3e7c68a8f4588f5b66'
    );
  });

  it('[Empty] Check the creation of merklee tree', () => {
    const items: Array<any> = [];
    const tree = new MerkleTreeExistanceProof(items, _hashFun);
    tree.create();
    expect(tree.root).to.equal(
      ''
    );
  });

  it('Get existance proof for an item', () => {
    const items = ['a', 'b', 'c', 'd'];
    const tree = new MerkleTreeExistanceProof(items, _hashFun);

    tree.create();
    expect(tree.getProofPath('a')).to.deep.equal([
      {
        right:
          '3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d'
      },
      {
        right:
          'd3a0f1c792ccf7f1708d5422696263e35755a86917ea76ef9242bd4a8cf4891a'
      }
    ]);
    expect(tree.getProofPath('d')).to.deep.equal([
      {
        left: '2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6'
      },
      {
        left: '62af5c3cb8da3e4f25061e829ebeea5c7513c54949115b1acc225930a90154da'
      }
    ]);
    expect(tree.getProofPath('ε')).to.deep.equal([]);
  });
});
