import { expect } from "chai";
import sinon from "sinon";
import axios from "axios";
import Calculator from "../src/calculator";

describe.only("Network Calls", () => {
  let userService: Calculator;
  let axiosStub: sinon.SinonStub;

  beforeEach(() => {
    userService = new Calculator();
    axiosStub = sinon.stub(axios, "get");
  });

  afterEach(() => {
    axiosStub.restore();
  });

  // Test for GET Network Call
  it("should return user data", async () => {
    const fakeResponse = {
      data: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    };
    axiosStub.resolves(fakeResponse);

    const response = await userService.getUser();

    expect(response.data).to.deep.equal(fakeResponse.data);
    expect(response.data.id).to.equal(1);
    expect(
      axiosStub.calledOnceWith("https://jsonplaceholder.typicode.com/users/1")
    ).to.be.true;
  });

  // Test for POST Network Call
  it("should save data (POST REQUEST)", async () => {
    const axiosPostStub = sinon.stub(axios, "post");
    const userPayload = {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    const fakeResponse = {
      status: 201,
      data: { id: 1, ...userPayload },
    };
    axiosPostStub.resolves(fakeResponse);

    const res = await userService.saveUser(userPayload);

    expect(res.status).to.equal(201);
    expect(res.data.id).to.equal(1);

    axiosPostStub.restore();
  });
});
