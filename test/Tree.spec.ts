import { MerkleTree } from "../src/Tree";

import { expect } from "chai";

describe("Create a Merkle tree", () => {
  it("Create a new tree", () => {
    const items = ["a", "b", "c", "d"];
    const tree = new MerkleTree(items);
    tree.create();
    expect(tree.root).to.equal(
      "12a40550c10c6339bf6f271445270e49b844d6c9e8abc36b9b642be532befe94"
    );
  });

  it("Create a new tree", () => {
    const items = ["a", "b", "c"];
    const tree = new MerkleTree(items);
    tree.create();
    expect(tree.root).to.equal(
      "14eec32d1bd92fe52253ef7547e20407b0dd70dbc835e3cbbb81dd8ef52ca6c7"
    );
  });

  it("Create a new tree", () => {
    const items: Array<string> = [];
    const tree = new MerkleTree(items);
    tree.create();
    expect(tree.root).to.equal(undefined);
  });
});
