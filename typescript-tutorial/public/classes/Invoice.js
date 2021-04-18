export default class Invoice {
    constructor(client, details, amount) {
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
