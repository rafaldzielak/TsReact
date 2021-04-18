import HasFormatter from "../interfaces/HasFormatter.js";
export default class Invoice implements HasFormatter {
  readonly client: string; //only allows to read, even inside the class
  private details: string; //read and change inside the class
  public amount: number; //default is public, so there's no need to add it

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    // this.client = "aaa"; //does not work!
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
// export default Invoice;
