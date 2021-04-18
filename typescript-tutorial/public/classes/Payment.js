export default class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.format = () => `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
