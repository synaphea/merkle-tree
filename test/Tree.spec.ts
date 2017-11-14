import * as CryptoJS from "crypto-js";

import { MerkleTree } from "../lib/Tree";

import { expect } from "chai";

const name = ["SHA1", "SHA256", "SHA512"];
const methods = [CryptoJS.SHA1, CryptoJS.SHA256, CryptoJS.SHA512];
const results = [
  [
    "6e55a0a66dde5974df130a556ac1b8f2c80862ed",
    "2663fc0644e1349159ae6204c4149774e1868776",
    undefined
  ],
  [
    "12a40550c10c6339bf6f271445270e49b844d6c9e8abc36b9b642be532befe94",
    "14eec32d1bd92fe52253ef7547e20407b0dd70dbc835e3cbbb81dd8ef52ca6c7",
    undefined
  ],
  [
    "48301af9ea33a3f32b20bfca207b1ccbead4eafb4a6f4be164dd7ffb6b198a4cbe8d4c06893c16d45290c2c6f6e8f6433dbd5916c4ceeec372e7e605caf73f48",
    "0c32526e38bd228495c7fa2bcc65947cdee09679534b0a9f03b162a79d82ca753bf7e43362fdef31d75f85c4312ff3cd74e6556b5785dd98bd0e7a9ab5c9a08b",
    undefined
  ]
];

methods.forEach((method, index) => {
  const res = results[index];
  describe(`[${name[index]}] Create a Merkle tree`, () => {
    it("Create a new tree (Even number of items)", () => {
      const items = ["a", "b", "c", "d"];
      const tree = new MerkleTree(items, method);
      tree.create();
      expect(tree.root).to.equal(res[0]);
    });

    it("Create a new tree (Odd number of items)", () => {
      const items = ["a", "b", "c"];
      const tree = new MerkleTree(items, method);
      tree.create();
      expect(tree.root).to.equal(res[1]);
    });

    it("Create a new tree (Empty)", () => {
      const items: Array<string> = [];
      const tree = new MerkleTree(items, method);
      tree.create();
      expect(tree.root).to.equal(res[2]);
    });
  });
});
