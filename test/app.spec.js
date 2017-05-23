import app from '../src/app';

describe("Demo test", function() {
  it("Bar is a baz", () => {
    expect(app.bar).to.be.equal('baz');
  });

  it("7 is lucky number", () => {
    expect(app.foo).to.have.lengthOf(7);
  });

  it("Foo should have first 6 fibonacci numbers", function() {
    expect(app.foo).to.have.members([0, 1, 2, 3, 5, 8]);
  });

});