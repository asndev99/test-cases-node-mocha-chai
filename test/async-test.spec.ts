import { expect } from "chai";
import Calculator from "../src/calculator";

describe("ASYNC AWAIT AND PROMISE TEST CASE", () => {
  let calc: Calculator;

  it("should work with async and await");

  beforeEach(() => {
    calc = new Calculator();
  });
  it("should resolve to 4", async () => {
    const result = await calc.asyncFunctionPromise();
    expect(result).to.equal(4);
  });
});
