import axios from "axios";

class Calculator {
  add(a: number, b: number): number {
    this.logMessage("Add Two Numbers");
    let c = this.getRandomValue();
    return a + b + c;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Can not divide by zero");
    }
    return a / b;
  }

  getRandomValue(): number {
    return Math.floor(Math.random() * 10 + 1);
  }

  logMessage(msg: string) {
    console.log(msg);
  }

  asyncFunctionPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(4);
      }, 1000);
    });
  }

  //axios request,network calls
  async getUser() {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
  }

  async saveUser(payload: any) {
    return await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      payload
    );
  }
}

export default Calculator;
