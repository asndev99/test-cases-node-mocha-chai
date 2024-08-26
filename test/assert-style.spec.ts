import { assert, expect } from "chai";
import chai from "chai";
chai.should();

describe("assert style", () => {
  it("expect assertion style", () => {
    //arrange
    const name: string = "backend-dev";
    const age: number = 30;
    const objData: Object = { name: "asn", age: 23 };
    const arrData: Array<number> = [1, 2, 3, 4, 5, 6];
    const boolData: Boolean = true;

    //string
    expect(name).to.be.ok;
    expect(name).to.be.a.string;
    expect(name).to.not.to.be.a("asn");

    //number
    expect(age).to.be.a.ok;
    expect(age).to.be.equal(age);
    expect(age).to.be.a("number");

    //object
    expect(objData).to.be.ok;
    expect(objData).to.be.a("object");
    expect(objData).to.have.property("name").equal("asn");
    expect(objData).to.have.property("age").equal(23);

    //array
    expect(arrData).to.be.ok;
    expect(arrData).to.have.lengthOf(6);
    expect(arrData).to.have.lengthOf(6).that.include(2);
    expect(arrData).not.to.have.lengthOf(8).that.does.not.include(7);
    expect(arrData).to.be.a("array");
  });

  it("should style", () => {
    //arrange
    const name: string = "backend-dev";
    const age: number = 30;
    const objData: Object = { name: "asn", age: 23 };
    const arrData: Array<number> = [1, 2, 3, 4, 5, 6];
    const boolData: Boolean = true;

    //string
    name.should.be.ok;
    name.should.be.a("string");
    name.should.not.equal("asn");

    age.should.be.ok;
    age.should.be.equal(30);
    age.should.be.a("number");

    objData.should.be.ok;
    objData.should.be.a("object");
    objData.should.have.property("name").equal("asn");
    objData.should.have.property("age").equal(23);

    arrData.should.be.ok;
    arrData.should.have.lengthOf(6);
    arrData.should.have.lengthOf(6).that.include(1);
    arrData.should.not.to.have.lengthOf(9).that.does.not.include(9);
  });

  it("assert Style", () => {
    const name: string = "backend-dev";
    const age: number = 30;
    const objData: Object = { name: "asn", age: 23 };
    const arrData: Array<number> = [1, 2, 3, 4, 5, 6];
    const boolData: Boolean = true;

    assert.isOk(name);
    assert.equal(name, "backend-dev");
    assert.typeOf(name, "string");

    assert.isOk(age);
    assert.equal(age, 30);
    assert.typeOf(age, "number");

    assert.typeOf(objData, "object");
    assert.deepEqual(objData, { name: "asn", age: 23 });

    assert.typeOf(arrData, "array");
    assert.deepEqual(arrData, [1, 2, 3, 4, 5, 6]);
    assert.include(arrData, 2);
  });
});
