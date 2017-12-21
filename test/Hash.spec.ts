import { Hash } from '../lib/index';
import * as CryptoJS from 'crypto-js';

import { expect } from 'chai';

const N = 100;

describe(`Check hash libraries`, () => {
  it('MD5 tests', () => {
    expect(Hash.hash('md2', 'testing')).to.equal('fc134df10d6ecafceb5c75861d01b41f');
  });
  it('adler32 tests', () => {
    expect(Hash.hash('adler32', 'testing')).to.equal('0c1e02ff');
  });

  it('Bench MD5 tests (native)', () => {
    for (let i = 0; i < N; i ++) {
      const res = Hash.hash('md2', `testing ${i}`);
    }
  });

  it('Bench MD5 tests (js)', () => {
    for (let i = 0; i < N; i ++) {
      const res = CryptoJS.MD5(`testing ${i}`);
    }
  });

  it('Bench SHA256 tests (native)', () => {
    for (let i = 0; i < N; i ++) {
      const res = Hash.hash('sha256', `testing ${i}`);
    }
  });

  it('Bench SHA256 tests (js)', () => {
    for (let i = 0; i < N; i ++) {
      const res = CryptoJS.SHA256(`testing ${i}`);
    }
  });
});
