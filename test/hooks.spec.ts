import { expect } from "chai";
import Calculator from "../src/calculator";
import chai from "chai";
chai.should();

describe("hooks test", () => {
  let calc: Calculator;

  before(() => {
    console.log("before");
    calc = new Calculator();
  });

  beforeEach(() => {
    console.log("Before Each Executed");
  });

  it("Should return sum", () => {
    const result = calc.add(2, 3);
    expect(result).equal(5);
  });

  it("should return subtract", () => {
    const result = calc.subtract(5, 3);
    result.should.equal(2);
  });

  afterEach(() => {
    console.log("After Each");
  });

  after(() => {
    console.log("After");
  });
});
