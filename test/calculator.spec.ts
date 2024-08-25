import { expect } from "chai";
import Calculator from "../src/calculator";

describe("Test Calculator Class", () => {
  it("should return sum", () => {
    //arrange
    const calc = new Calculator();

    //action
    const result = calc.add(2, 3);

    //assert
    expect(result).to.equal(5);
  });

  it("should return subtract", () => {
    //arrange
    const calc = new Calculator();

    //action
    const result = calc.subtract(5, 3);

    //assert
    expect(result).to.equal(2);
  });

  it("should return multiply", () => {
    //arrange
    const calc = new Calculator();

    //action
    const result = calc.multiply(5, 3);

    //assert
    expect(result).to.equal(15);
  });

  it("should return divison", () => {
    //arrange
    const calc = new Calculator();

    //action
    const result = calc.divide(8, 2);

    //assert
    expect(result).to.equal(4);
  });

  it("should throw an error when dividing by zero", () => {
    const calc = new Calculator();
    expect(() => calc.divide(8, 0)).to.throw("Can not divide by zero");
  });
});
