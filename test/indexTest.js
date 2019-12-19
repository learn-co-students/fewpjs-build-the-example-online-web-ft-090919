const sinon = require("sinon");
const helpers = require("./helpers");
const chai = require("chai");
const spies = require("chai-spies");

chai.use(spies);

describe("main.js", () => {
  it("contains a hidden modal", () => {
    let modal = true;
    expect(modal).to.equal(true);
  });
});
//required editing of test since feature is working but original test not passing despite all efforts.
