import Hash from '../lib/index';

import { expect } from 'chai';

describe(`Check hash libraries`, () => {
  it('MD5 tests', () => {
    expect(Hash.hash('md2', 'testing')).to.equal('fc134df10d6ecafceb5c75861d01b41f');
  });
  it('adler32 tests', () => {
    expect(Hash.hash('adler32', 'testing')).to.equal('0c1e02ff');
  });
});
