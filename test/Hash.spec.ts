import Hash from '../lib/index';

import { expect } from 'chai';

describe(`Check hash function`, () => {
  it('Create a new tree (Even number of items)', () => {
    console.log(Hash('md2', 'testing'));

    console.log('\nNext should be:\n0c1e02ff');
    console.log(Hash('adler32', 'testing'));
  });
});
