import { expect } from "chai";
import Calculator from "../src/calculator";
import sinon, { SinonMock, SinonSpy, SinonStub } from "sinon";

describe("Spy Stub And Mock Tests", () => {
  let calc: Calculator;
  let spy: SinonSpy;
  let stub: SinonStub;
  let mock: SinonMock;

  before(() => {
    console.log("before");
    calc = new Calculator();
  });

  beforeEach(() => {
    console.log("Before Each Executed");
  });

  afterEach(() => {
    console.log("After Each");
  });

  after(() => {
    console.log("After");
  });

  describe("add test suite", () => {
    it("should return sum", () => {
      spy = sinon.spy(calc, "add");
      mock = sinon.mock(calc);
      stub = sinon.stub(calc, "getRandomValue").returns(2);
      let expectations = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("Add Two Numbers");
      //action
      const result = calc.add(2, 3);

      //assert
      expect(result).to.equal(7);
      expect(spy.calledOnceWith(2, 3)).to.be.true;
      expectations.verify();
      spy.restore();
      stub.restore();
      mock.restore();
    });
  });
});
